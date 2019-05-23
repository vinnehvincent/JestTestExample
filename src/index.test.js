import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import App from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("index tests", () => {
  const wrapper = shallow(<App />);
  it("it renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should be wrapped in #App", () => {
    expect(wrapper.find(".App")).toBeDefined();
  });
  it("should have 'Hello CodeSandbox' as title", () => {
    expect(wrapper.find("h1").text()).toBe("Hello CodeSandbox");
  });
});
