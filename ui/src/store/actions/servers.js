import * as actionTypes from "./actionTypes";
import axios from "../../axios-api";

// Redux-Saga
export const fetchServers = () => ({
  type: actionTypes.FETCH_SERVERS,
});

export const fetchServersStart = () => ({
  type: actionTypes.FETCH_SERVERS_START,
});

export const fetchServersSuccess = (servers) => ({
  type: actionTypes.FETCH_SERVERS_SUCCESS,
  servers,
});

export const fetchServersFail = (err) => ({
  type: actionTypes.FETCH_SERVERS_FAIL,
  err,
});

export const fetchServersRebootingStart = () => ({
  type: actionTypes.FETCH_SERVERS_REBOOTING_START,
});

export const fetchServersRebootingSuccess = (serv, search, reboot, query) => ({
  type: actionTypes.FETCH_SERVERS_REBOOTING_SUCCESS,
  reboot,
  servers: serv,
  searchServers: search,
  searchQuery: query,
});

export const fetchServersRebootingFail = (err) => ({
  type: actionTypes.FETCH_SERVERS_REBOOTING_FAIL,
  err,
});

// Redux-Thunk
export const fetchServersRebooting = (data) => (dispatch) => {
  dispatch(fetchServersStart());
  const timer = setTimeout(() => {
    axios
      .get("/")
      .then((res) => {
        const { reboot, searchServers, searchQuery } = { ...data };
        const rebootList = res.data.filter(
          (server) => server.status === "REBOOTING"
        );
        const rebootAgain = rebootList.length !== 0 ? !reboot : reboot;
        if (searchQuery) {
          for (const key in searchServers) {
            for (const keyReboot in rebootList) {
              if (searchServers[key].id === rebootList[keyReboot].id) {
                searchServers[key].status = res.data[key].status;
              }
            }
          }
        }
        dispatch(
          fetchServersRebootingSuccess(
            res.data,
            searchServers,
            rebootAgain,
            searchQuery
          )
        );
      })
      .catch((err) => dispatch(fetchServersRebootingFail(err.message)));
  }, 1000);
  return () => clearTimeout(timer);
};

export const clickDropdownStart = () => ({
  type: actionTypes.CLICK_DROPDOWN_START,
});

export const clickDropdownSuccess = (servers, search, reboot) => ({
  type: actionTypes.CLICK_DROPDOWN_SUCCESS,
  servers,
  searchServers: search,
  reboot,
});

export const clickDropdownFail = (err) => ({
  type: actionTypes.CLICK_DROPDOWN_FAIL,
  err,
});

// Redux-Saga
export const clickDropdown = (id, newStatus, data) => ({
  type: actionTypes.CLICK_DROPDOWN,
  newStatus,
  data,
  id,
});

export const changeSearch = (value, servers) => {
  const newSearchServers = servers.filter((server) =>
    server.name.toLowerCase().match(value.toLowerCase())
  );
  return {
    type: actionTypes.CHANGE_SEARCH,
    searchServers: newSearchServers,
    searchQuery: value,
  };
};
