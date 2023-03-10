import React from "react";
import { render } from "@testing-library/react";
import * as router from "react-router";
import Main from "./Main";

// @TODO: It's main page, not login page
describe("Login Page", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  // @TODO: I'd rather use call it 'should render valid page', as we already have 'main page' in the describe
  it("Should render Main page", () => {
    render(<Main />);
  });
});
