import LoginForm from "@/components/LoginForm";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("LoginForm", () => {
  it("should enter username and password and click on login button", async () => {
    render(<LoginForm />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeDisabled();

    await userEvent.type(screen.getByLabelText(/Username/), "kayano");
    await userEvent.type(screen.getByLabelText(/Password/), "password");
    expect(loginButton).toBeEnabled();

    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.getByText("Success logging in")).toBeInTheDocument();
    });
  });

  it("should login user and display error message", async () => {
    server.use(
      rest.post("/api/auth", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(<LoginForm />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeDisabled();

    await userEvent.type(screen.getByLabelText(/Username/), "kayano");
    await userEvent.type(screen.getByLabelText(/Password/), "password");
    expect(loginButton).toBeEnabled();

    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(screen.getByText("Error logging in")).toBeInTheDocument();
    });
  });
});
