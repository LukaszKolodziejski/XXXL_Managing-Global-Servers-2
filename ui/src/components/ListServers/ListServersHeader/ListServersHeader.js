import React from "react";
import styles from "./css/ListServersHeader.module.css";

const ListServersHeader = () => {
  return (
    <p className={styles.ListServersHeader}>
      <span>NAME</span>
      <span>STATUS</span>
    </p>
  );
};

export default ListServersHeader;
