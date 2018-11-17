import Scrollspy from "../components/Scrollspy";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

Enzyme.configure({ adapter: new Adapter() });

describe("Scrollspy", () => {
  it("is truthy", () => {
    expect(Scrollspy).toBeTruthy();
  });

  it("shallow renders", () => {
    shallow(<Scrollspy />);
  });
});
