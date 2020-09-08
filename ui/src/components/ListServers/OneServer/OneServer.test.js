import React from "react";
import styles from "./css/OneServer.module.css";
import NameOneServer from "./NameOneServer/NameOneServer";
import StatusOneServer from "./StatusOneServer/StatusOneServer";
import Dropdown from "../../UI/Dropdown/Dropdown";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import OneServer from "./OneServer";

configure({ adapter: new Adapter() });

describe("<OneServer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OneServer />);
  });

  it("should render <NameOneServer /> ", () => {
    expect(wrapper.find(NameOneServer)).toHaveLength(1);
  });

  it("should render <StatusOneServer /> ", () => {
    expect(wrapper.find(StatusOneServer)).toHaveLength(1);
  });

  it("<OneServer/> should contains inside these components:  ", () => {
    expect(
      wrapper.contains(
        <div className={styles.OneServer}>
          <NameOneServer />
          <StatusOneServer />
          <Dropdown />
        </div>
      )
    ).toEqual(true);
  });

  it("should render <Dropdown /> as children ", () => {
    expect(wrapper.find(Dropdown)).toHaveLength(1);
  });
});
