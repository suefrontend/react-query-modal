import UserList from "@/components/UserList";
import { render, screen, waitFor } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("UserList - Rnedering", () => {
  it("should have text kayano", async () => {
    render(<UserList />);
    expect(await screen.findByText("kayano")).toBeInTheDocument();
    expect(screen.queryByText("No users")).not.toBeInTheDocument();
  });

  it("should have username minako rendered", async () => {
    server.use(
      rest.get("/api/users", (req, res, ctx) => {
        return res(ctx.json([{ id: 2, username: "minako" }]));
      })
    );
    render(<UserList />);
    expect(await screen.findByText("minako")).toBeInTheDocument();
  });
});
