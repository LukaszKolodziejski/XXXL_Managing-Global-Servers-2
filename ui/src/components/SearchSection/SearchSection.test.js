import React from "react";
import styles from "./css/SearchSection.module.css";
import SearchInfo from "./SearchInfo/SearchInfo";
import Search from "./Search/Search";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchSection from "./SearchSection";

configure({ adapter: new Adapter() });

describe("<SearchSection />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchSection />);
  });

  it("should render <SearchInfo /> ", () => {
    expect(wrapper.find(SearchInfo)).toHaveLength(1);
  });

  it("<SearchInfo/> should contains inside these components: ", () => {
    expect(
      wrapper.contains(
        <section className={styles.SearchSection}>
          <SearchInfo />
          <Search />
        </section>
      )
    ).toEqual(true);
  });

  it("should render <Search /> inside ", () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });
});
