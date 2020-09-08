import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

import styles from "./Offline.module.css";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Offline from "./Offline";

configure({ adapter: new Adapter() });

describe("<Offline />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Offline />);
  });

  it("<Offline/> should contains inside these components:  ", () => {
    expect(
      wrapper.contains(
        <div className={styles.Container}>
          <div className={styles.Cross}>x</div>
          <div className={styles.Offline}></div>
        </div>
      )
    ).toEqual(true);
  });
});
