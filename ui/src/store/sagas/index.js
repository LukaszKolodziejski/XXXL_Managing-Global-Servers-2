import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { fetchServersSaga, clickDropdownSaga } from "./servers";

export function* watchServers() {
  yield all([takeEvery(actionTypes.FETCH_SERVERS, fetchServersSaga)]);
  yield all([takeEvery(actionTypes.CLICK_DROPDOWN, clickDropdownSaga)]);
}
