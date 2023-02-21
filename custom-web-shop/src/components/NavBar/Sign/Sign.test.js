import React from "react";
import Sign from "./Sign";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Sign out component", () => {
  it("Click should alert sth", () => {
    render(<Sign />);
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const buttonElement = screen.getByText("SIGN OUT");
    fireEvent.click(buttonElement);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
