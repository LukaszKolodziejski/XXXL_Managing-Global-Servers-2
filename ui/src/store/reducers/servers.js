import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  servers: [],
  searchServers: [],
  searchQuery: "",
  reboot: false,
  err: "",
};

const fetchServersStart = (state, action) => ({
  ...state,
  loading: true,
});

const fetchServersSuccess = (state, action) => ({
  ...state,
  loading: false,
  servers: action.servers,
});

const fetchServersFail = (state, action) => ({
  ...state,
  loading: false,
  err: action.err,
});

const fetchServersRebootingStart = (state, action) => ({
  ...state,
  loading: true,
});

const fetchServersRebootingSuccess = (state, action) => ({
  ...state,
  loading: false,
  servers: action.servers,
  reboot: action.reboot,
  searchServers: action.searchServers,
  searchQuery: action.searchQuery,
});

const fetchServersRebootingFail = (state, action) => ({
  ...state,
  loading: false,
  err: action.err,
});

const clickDropdownStart = (state, action) => ({
  ...state,
  loading: true,
});

const clickDropdownSuccess = (state, action) => ({
  ...state,
  loading: false,
  servers: action.servers,
  searchServers: action.searchServers,
  reboot: action.reboot,
});

const clickDropdownFail = (state, action) => ({
  ...state,
  loading: false,
  err: action.err,
});

const changeSearch = (state, action) => ({
  ...state,
  searchServers: action.searchServers,
  searchQuery: action.searchQuery,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVERS_START:
      return fetchServersStart(state, action);
    case actionTypes.FETCH_SERVERS_SUCCESS:
      return fetchServersSuccess(state, action);
    case actionTypes.FETCH_SERVERS_FAIL:
      return fetchServersFail(state, action);

    case actionTypes.FETCH_SERVERS_REBOOTING_START:
      return fetchServersRebootingStart(state, action);
    case actionTypes.FETCH_SERVERS_REBOOTING_SUCCESS:
      return fetchServersRebootingSuccess(state, action);
    case actionTypes.FETCH_SERVERS_REBOOTING_FAIL:
      return fetchServersRebootingFail(state, action);

    case actionTypes.CLICK_DROPDOWN_START:
      return clickDropdownStart(state, action);
    case actionTypes.CLICK_DROPDOWN_SUCCESS:
      return clickDropdownSuccess(state, action);
    case actionTypes.CLICK_DROPDOWN_FAIL:
      return clickDropdownFail(state, action);

    case actionTypes.CHANGE_SEARCH:
      return changeSearch(state, action);
    default:
      return state;
  }
};

export default reducer;
