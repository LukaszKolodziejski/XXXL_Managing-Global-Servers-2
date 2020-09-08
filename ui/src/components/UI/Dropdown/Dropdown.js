import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import * as actions from "../../../store/actions/index";
import styles from "./css/Dropdown.module.css";
import Button from "../Button/Button";

const Dropdown = (props) => {
  const { id, status } = props;

  const data = useSelector((state) => state.serversReducer);
  const dispatch = useDispatch();

  const onClickDropdown = (id, newStatus, data) =>
    dispatch(actions.clickDropdown(id, newStatus, data));

  const onChangeStatus = (id, newStatus) =>
    onClickDropdown(id, newStatus, data);

  const dropdownContent = useMemo(
    () =>
      (status === "ONLINE" && (
        <div className={styles.Dropdown__List}>
          <Button
            btnType="Dropdown__Item"
            clicked={() => onChangeStatus(id, "off")}
          >
            Turn off
          </Button>
          <Button
            btnType="Dropdown__Item"
            clicked={() => onChangeStatus(id, "reboot")}
          >
            Reboot
          </Button>
        </div>
      )) ||
      (status === "OFFLINE" && (
        <div className={styles.Dropdown__List}>
          <Button
            btnType="Dropdown__Item"
            clicked={() => onChangeStatus(id, "on")}
          >
            Turn on
          </Button>
        </div>
      )) ||
      (status === "REBOOTING" && null),
    [onChangeStatus]
  );
  return (
    <div className={styles.Dropdown}>
      <Button btnType="Dropdown__Btn">...</Button>
      {dropdownContent}
    </div>
  );
};

Dropdown.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default Dropdown;
