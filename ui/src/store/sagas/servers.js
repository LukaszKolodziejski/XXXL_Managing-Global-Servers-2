import { put } from "redux-saga/effects";
import axios from "../../axios-api";

import * as actions from "../actions/index";

export function* fetchServersSaga(action) {
  yield put(actions.fetchServersStart());
  try {
    const res = yield axios.get("/");
    yield put(actions.fetchServersSuccess(res.data));
  } catch (err) {
    yield put(actions.fetchServersFail(err.message));
  }
}

export function* clickDropdownSaga(action) {
  yield put(actions.clickDropdownStart());
  const { id, newStatus, data } = yield action;
  try {
    const res = yield axios.put(`/${id}/${newStatus}`);
    const { servers, reboot, searchServers, searchQuery } = yield { ...data };
    const { status } = yield res.data;
    if (!searchQuery) {
      for (const key in servers) {
        servers[key].id === id && (servers[key].status = yield status);
      }
    } else {
      for (const key in searchServers) {
        searchServers[key].id === id &&
          (searchServers[key].status = yield status);
      }
    }
    yield put(actions.clickDropdownSuccess(servers, searchServers, !reboot));
  } catch (err) {
    yield put(actions.clickDropdownFail(err.message));
  }
}
