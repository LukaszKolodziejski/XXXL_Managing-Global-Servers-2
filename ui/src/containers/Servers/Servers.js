import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions/index";
import ListServers from "../../components/ListServers/ListServers";
import SearchSection from "../../components/SearchSection/SearchSection";
import styles from "./css/Servers.module.css";

const Servers = (props) => {
  const data = useSelector((state) => state.serversReducer);

  const dispatch = useDispatch();

  const onFetchServersRebooting = (data) =>
    dispatch(actions.fetchServersRebooting(data));
  const onFetchServers = () => dispatch(actions.fetchServers());
  const { reboot } = data;

  useEffect(() => {
    onFetchServers();
  }, []);

  useEffect(() => {
    onFetchServersRebooting(data);
  }, [reboot]);

  return (
    <main className={styles.Servers}>
      <SearchSection />
      <ListServers />
    </main>
  );
};

export default Servers;
