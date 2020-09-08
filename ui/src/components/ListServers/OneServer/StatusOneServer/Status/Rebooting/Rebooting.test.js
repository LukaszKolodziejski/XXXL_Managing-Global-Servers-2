import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

import styles from "./Rebooting.module.css";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Rebooting from "./Rebooting";

configure({ adapter: new Adapter() });

describe("<Rebooting />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Rebooting />);
  });

  it("<Rebooting/> should contains inside these components:  ", () => {
    expect(wrapper.contains(<div className={styles.Rebooting}></div>)).toEqual(
      true
    );
  });
});
