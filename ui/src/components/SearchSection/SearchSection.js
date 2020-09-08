import React from "react";
import styles from "./css/SearchSection.module.css";
import SearchInfo from "./SearchInfo/SearchInfo";
import Search from "./Search/Search";

const SearchSection = () => {
  return (
    <section className={styles.SearchSection}>
      <SearchInfo />
      <Search />
    </section>
  );
};

export default SearchSection;
