import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

import styles from "./Online.module.css";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Online from "./Online";

configure({ adapter: new Adapter() });

describe("<Online />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Online />);
  });

  it("<Online/> should contains inside these components:  ", () => {
    expect(
      wrapper.contains(
        <div className={styles.RingContainer}>
          <div ref={wrapperRing} className={styles.Ringring}></div>
          <div ref={wrapperCircle} className={styles.Circle}></div>
          <div ref={wrapperStatus} className={styles.Online}></div>
        </div>
      )
    ).toEqual(true);
  });
});
