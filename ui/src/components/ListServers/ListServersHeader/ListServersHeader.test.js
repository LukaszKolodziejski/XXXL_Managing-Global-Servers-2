import React from "react";
import styles from "./css/ListServersHeader.module.css";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ListServersHeader from "./ListServersHeader";

configure({ adapter: new Adapter() });

describe("<ListServersHeader />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ListServersHeader />);
  });

  it("<ListServersHeader/> should contains inside these element:  ", () => {
    expect(
      wrapper.contains(
        <p className={styles.ListServersHeader}>
          <span>NAME</span>
          <span>STATUS</span>
        </p>
      )
    ).toEqual(true);
  });

  it("<ListServersHeader/> Name: should contains inside these element:  ", () => {
    expect(wrapper.contains(<span>NAME</span>)).toEqual(true);
  });

  it("<ListServersHeader/> Status: should contains inside these element:  ", () => {
    expect(wrapper.contains(<span>STATUS</span>)).toEqual(true);
  });
});
