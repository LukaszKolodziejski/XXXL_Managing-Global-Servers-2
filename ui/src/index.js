import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import serversReducer from "./store/reducers/servers";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { watchServers } from "./store/sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = { serversReducer };

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(rootReducer),
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchServers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
