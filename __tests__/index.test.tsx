import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home page - rendering", () => {
  it("should have Home Page text", () => {
    render(<Home />);
    screen.getByText("Home Page");
  });
});
