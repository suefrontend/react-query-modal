import { UserProfile } from "@/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("UserProfile - Rendering", () => {
  it("should have text Email verified when isEmailVerified is true", () => {
    render(
      <UserProfile
        displayName="Kayano"
        userName="kayak"
        email="kayano@test.com"
        isEmailVerified={true}
      />
    );

    expect(screen.getByText("Email Verified")).toBeInTheDocument();
  });

  it("should have text Email Not Verified when isEmailVerified is false", () => {
    render(
      <UserProfile
        displayName="Kayano"
        userName="kayak"
        email="kayano@test.com"
        isEmailVerified={false}
      />
    );
    expect(screen.queryByText("Email Verified")).not.toBeInTheDocument();
    expect(screen.getByText("Email Not Verified")).toBeInTheDocument();
  });
});
