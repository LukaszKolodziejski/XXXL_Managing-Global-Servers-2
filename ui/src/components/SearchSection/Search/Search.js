import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/Search.module.css";

const Search = (props) => {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Search");

  const servers = useSelector((state) => state.serversReducer.servers);
  const dispatch = useDispatch();

  const onSearch = (value, servers) =>
    dispatch(actions.changeSearch(value, servers));

  const onChangeSearchHandler = (e) => {
    const { value } = e.target;
    setValue(value);
    onSearch(value, servers);
  };

  return (
    <div className={styles.Search}>
      <FontAwesomeIcon icon={faSearch} className={styles.Search__Loupe} />
      <input
        type="text"
        name="Search"
        id="Search"
        className={styles.Search__Input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeSearchHandler(e)}
        onFocus={() => setPlaceholder("")}
        onBlur={() => setPlaceholder("Search")}
      />
    </div>
  );
};

export default Search;
