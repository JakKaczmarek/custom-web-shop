import React from "react";
import Sign from "./Sign";
import { render, screen, fireEvent } from "@testing-library/react";
import * as router from "react-router";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

it("Click should alert sth and navigate to login page", () => {
  render(<Sign />);
  const alertMock = jest.spyOn(window, "alert").mockImplementation();
  const buttonElement = screen.getByText("SIGN IN");
  fireEvent.click(buttonElement);
  expect(alertMock).toHaveBeenCalledTimes(1);
  expect(navigate).toHaveBeenCalledWith("/login");
});
