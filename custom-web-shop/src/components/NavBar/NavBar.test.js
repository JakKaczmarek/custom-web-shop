import React from "react";
import NavBar from "./NavBar";
import { render } from "@testing-library/react";
import * as router from "react-router";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

it("Should show navbar", () => {
  render(<NavBar />);
});
