/**
 * `StaticMap`; `mapbox` accessible map component.
 */

import React from "react"
import { StaticMap as ReactStaticMap } from "react-map-gl"
import mapboxgl from "mapbox-gl"

import "mapbox-gl/dist/mapbox-gl.css"

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

const StaticMap = () => (
  <ReactStaticMap
    mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
    mapStyle="mapbox://styles/kelvindecosta/ckpvh38th106317ofj1q4ll3x"
  />
)

export default StaticMap
