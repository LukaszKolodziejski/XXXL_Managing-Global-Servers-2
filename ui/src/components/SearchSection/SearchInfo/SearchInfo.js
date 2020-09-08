import React from "react";
import { useSelector } from "react-redux";

import styles from "./SearchInfo.module.css";

const SearchInfo = (props) => {
  const { servers, searchServers, searchQuery } = useSelector(
    (state) => state.serversReducer
  );
  const listServers = searchQuery ? searchServers : servers;
  const amountServers = listServers.length;

  return (
    <div className={styles.SearchInfo}>
      <h3>Servers</h3>
      <p>Number of elements: {amountServers}</p>
    </div>
  );
};

export default SearchInfo;
