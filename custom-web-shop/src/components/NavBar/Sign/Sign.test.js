import React from "react";
import Sign from "./Sign";
import { render, screen, fireEvent } from "@testing-library/react";
import * as router from "react-router";
// import { toHaveStyle } from "@testing-library/jest-native/dist/to-have-style";
// import "@testing-library/jest-native/extend-expect";

// expect.extend({ toHaveStyle });

describe("Sign component", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("Click should alert sth and navigate to login page", () => {
    render(<Sign />);
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const buttonElement = screen.getByTestId("buttonSO");
    fireEvent.click(buttonElement);
    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith("/login");
  });

  // it("Check if ACCOUNT is color black", () => {
  //   render(<Sign />);
  //   const buttonElement = screen.getByTestId("buttonSO");
  //   expect(buttonElement).toHaveStyle({
  //     color: "black",
  //   });
  // });
});
