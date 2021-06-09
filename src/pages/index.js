import React from "react"
import keplerGlReducer from "kepler.gl/reducers"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { taskMiddleware } from "react-palm/tasks"
import { Provider, useDispatch } from "react-redux"
import KeplerGl from "kepler.gl"
// import { addDataToMap } from "kepler.gl/actions"
// import useSwr from "swr"

import "../styles/index.css"

const reducers = combineReducers({
  keplerGl: keplerGlReducer,
})

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware))

const Map = () =>
  typeof window !== "undefined" && (
    <KeplerGl
      id="kitch-roi"
      mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  )

const App = () => (
  <Provider {...{ store }}>
    <Map />
  </Provider>
)

export default App
