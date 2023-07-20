import { UserProfile } from "@/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("UserProfile - Rendering", () => {
  it("should have text Email verified when isEmailVerified is true", () => {
    render(
      <UserProfile
        displayName="KayanoKayanoKayanoKayanoKayanoKayanoKayanoKayano"
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

  it("should have display name end with three dots when length is greater than 30 characters", () => {
    render(
      <UserProfile
        displayName="Kayano Kayano Kayano Kayano Kayano Kayano"
        userName="kayak"
        email="kayano@test.com"
        isEmailVerified={false}
      />
    );
    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).toHaveTextContent(/.*\.\.\./);
  });

  it("should not have display name end with three dots when length is greater than 30 characters", () => {
    render(
      <UserProfile
        displayName="Kayano"
        userName="kayak"
        email="kayano@test.com"
        isEmailVerified={false}
      />
    );
    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./);
  });
});
