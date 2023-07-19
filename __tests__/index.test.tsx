import Home from "@/pages/index";
import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";

describe("Home page", () => {
  it("render all products heading", () => {
    render(<Home />);
    screen.getByRole("heading", { name: /All products/i });
  });
});
