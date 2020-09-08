import React from "react";
import { useSelector } from "react-redux";
import OneServer from "./OneServer/OneServer";
import ListServersHeader from "./ListServersHeader/ListServersHeader";
import styles from "./css/ListServers.module.css";

const ListServers = (props) => {
  const { servers, searchServers, searchQuery } = useSelector(
    (state) => state.serversReducer
  );

  const listServers = searchQuery ? searchServers : servers;
  const allServers = listServers.map((server) => (
    <OneServer
      key={server.id}
      id={server.id}
      name={server.name}
      status={server.status}
    />
  ));
  return (
    <section className={styles.ListServers}>
      <ListServersHeader />
      {allServers}
    </section>
  );
};

export default ListServers;
