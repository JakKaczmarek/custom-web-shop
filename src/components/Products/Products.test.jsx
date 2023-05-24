import React from "react";
import { render } from "@testing-library/react";
import Products from "./Products";

// const [page, setPage] = useState(1);

describe("image component", () => {
  it("Should render images component", () => {
    render(<Products />);
  });
  it("Should set page on 2", () => {
    render(<Products />);
    // console.log(page);
  });
});
