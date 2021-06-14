/**
 * Demonstration of `deck.gl` with H3 data.
 *
 * Format: { [center: string]: [selected: bool, neighbors: [string]] }
 */

import React, { useCallback, useState } from "react"
import DeckGL from "@deck.gl/react"
import { H3HexagonLayer } from "@deck.gl/geo-layers"
import { StaticMap } from "react-map-gl"
import mapboxgl from "mapbox-gl"

import "mapbox-gl/dist/mapbox-gl.css"

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

const DATA = require("../../data/riyadh.json")

const INITIAL_VIEW_STATE = {
  longitude: 46.6753,
  latitude: 24.7136,
  zoom: 9,
  pitch: 0,
  bearing: 0,
}

// [string] -> [{ hexagon: string }]
const getHexagons = h3Strings => h3Strings.map(hexagon => ({ hexagon }))

const getNeighbors = center => DATA[center][1]

const App = () => {
  const [selected, setSelected] = useState(
    Object.keys(DATA).filter(center => DATA[center][0])
  )

  const [unselected, setUnselected] = useState(
    Object.keys(DATA).filter(center => !DATA[center][0])
  )

  const [neighbors, setNeighbors] = useState(
    selected.reduce(
      (allNeighbors, center) => allNeighbors.concat(getNeighbors(center)),
      []
    ),
    [selected]
  )

  const [hovered, setHovered] = useState(null)

  const selectCenter = useCallback(
    hexagon => {
      setSelected(selected.concat(hexagon))
      setUnselected(unselected.filter(center => center !== hexagon))
      setNeighbors(neighbors.concat(getNeighbors(hexagon)))
    },
    [setSelected, selected, setUnselected, unselected, setNeighbors, neighbors]
  )

  const deselectCenter = useCallback(
    hexagon => {
      setSelected(selected.filter(center => center !== hexagon))
      setUnselected(unselected.concat(hexagon))

      // Remove each neighbor once
      const newNeighbors = neighbors
      getNeighbors(hexagon).forEach(neighbor =>
        newNeighbors.splice(newNeighbors.indexOf(neighbor), 1)
      )
      setNeighbors(newNeighbors)
    },
    [setSelected, selected, setUnselected, unselected, setNeighbors, neighbors]
  )

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller>
      <StaticMap
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/kelvindecosta/ckpvh38th106317ofj1q4ll3x"
      />
      {/* Neigbors of selected centers */}
      {neighbors && (
        <H3HexagonLayer
          {...{
            id: "h3-neighbors",
            data: getHexagons(
              hovered ? neighbors.concat(getNeighbors(hovered)) : neighbors
            ),
            pickable: false,
            wireframe: false,
            filled: true,
            extruded: false,
            getFillColor: () => [34, 211, 238],
            opacity: 0.25,
          }}
        />
      )}

      {/* Selected centers */}
      {selected && (
        <H3HexagonLayer
          {...{
            id: "h3-selected-centers",
            data: getHexagons(hovered ? selected.concat(hovered) : selected),
            pickable: true,
            wireframe: false,
            filled: true,
            extruded: false,
            getFillColor: ({ hexagon }) =>
              hexagon !== hovered ? [245, 158, 11] : [244, 63, 94],
            opacity: 0.75,
            coverage: 0.75,
            onClick: ({ object: { hexagon } }) => deselectCenter(hexagon),
          }}
        />
      )}

      {/* Unselected centers */}
      {unselected && (
        <H3HexagonLayer
          {...{
            id: "h3-unselected-centers",
            data: getHexagons(unselected),
            pickable: true,
            wireframe: false,
            filled: true,
            extruded: false,
            getFillColor: () => [255, 255, 255],
            opacity: 0.25,
            coverage: 0.25,
            onClick: ({ object: { hexagon } }) => selectCenter(hexagon),
            onHover: ({ object: { hexagon } = { hexagon: null } }) =>
              hexagon && setHovered(hexagon),
          }}
        />
      )}
    </DeckGL>
  )
}

export default App
