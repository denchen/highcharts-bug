import React from "react";
import { mount } from "enzyme";
import TestChart from "../TestChart";

describe("TestChart", () => {
  it("should render", () => {
    const wrapper = mount(<TestChart />);

    expect(wrapper.find("n")).toHaveLength(1);
  });
});
