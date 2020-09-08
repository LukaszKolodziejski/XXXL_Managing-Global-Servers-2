import React from "react";
import PropTypes from "prop-types";
import Online from "./Status/Online/Online";
import Offline from "./Status/Offline/Offline";
import Rebooting from "./Status/Rebooting/Rebooting";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StatusOneServer from "./StatusOneServer";

configure({ adapter: new Adapter() });

describe("<StatusOneServer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StatusOneServer />);
  });

  it("should render <Online /> ", () => {
    expect(wrapper.find(Online)).toHaveLength(0);
  });

  it("<StatusOneServer/> should contains inside these components:  ", () => {
    expect(wrapper.contains(<Rebooting />)).toEqual(false);
  });

  it("should render <Offline /> as children ", () => {
    expect(wrapper.find(Offline)).toHaveLength(0);
  });
});
