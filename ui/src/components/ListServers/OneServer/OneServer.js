import React from "react";
import styles from "./css/OneServer.module.css";
import NameOneServer from "./NameOneServer/NameOneServer";
import StatusOneServer from "./StatusOneServer/StatusOneServer";
import Dropdown from "../../UI/Dropdown/Dropdown";

const OneServer = React.memo((props) => {
  const { id, name, status } = props;
  return (
    <div className={styles.OneServer}>
      <NameOneServer name={name} />
      <StatusOneServer status={status} />
      <Dropdown id={id} status={status} />
    </div>
  );
});

export default OneServer;
