import React from "react";
import Servers from "./containers/Servers/Servers";
import Layout from "./hoc/Layout/Layout";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render <Layout /> ", () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it("<App/> should contains inside these components:  ", () => {
    expect(
      wrapper.contains(
        <Layout>
          <Servers />
        </Layout>
      )
    ).toEqual(true);
  });

  it("should render <Servers /> as children ", () => {
    expect(wrapper.find(Servers)).toHaveLength(1);
  });
});
