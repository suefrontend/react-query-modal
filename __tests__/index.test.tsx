import Home from "@/pages/index";
import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
  within,
} from "@testing-library/react";
import { mockProducts } from "../__mocks__/mockProduct";
import { mockCategories } from "../__mocks__/mockData";

describe("Home page", () => {
  it("render all products heading", () => {
    render(<Home products={mockProducts} categories={[]} />);
    screen.getByRole("heading", { name: /All products/i });
  });

  it("render an accessible searchbox", () => {
    render(<Home products={mockProducts} categories={[]} />);
    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toHaveAccessibleName("Search");
  });

  it("renders all the products", () => {
    render(<Home products={mockProducts} categories={[]} />);
    const allProducts = screen.getByRole("list", { name: /products/i });
    const { getAllByRole } = within(allProducts);
    const listitems = getAllByRole("listitem");
    expect(listitems.length).toBe(3);
  });

  it("renders all categories", () => {
    render(<Home products={mockProducts} categories={mockCategories} />);
    const allCategories = screen.getByRole("list", { name: /categories/i });
    const { getAllByRole } = within(allCategories);
    const listitems = getAllByRole("listitem", { name: /category/i });
    expect(listitems.length).toBe(2);
  });
});
