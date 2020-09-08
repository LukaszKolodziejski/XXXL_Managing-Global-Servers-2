import React from "react";
import "./css/Layout.css";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Layout from "./Layout";

configure({ adapter: new Adapter() });

describe("<Layout />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it("should render <Layout /> ", () => {
    expect(
      wrapper.find(<header className="Layout__header">Recruitment task</header>)
    ).toHaveLength(0);
  });

  it("<Layout/> should contains inside these components::  ", () => {
    expect(
      wrapper.contains(
        <div className="Layout">
          <header className="Layout__header">Recruitment task</header>
          <footer className="Layout__footer"></footer>
        </div>
      )
    ).toEqual(true);
  });

  it("should render <footer /> as children ", () => {
    expect(
      wrapper.find(<footer className="Layout__footer"></footer>)
    ).toHaveLength(0);
  });
});
