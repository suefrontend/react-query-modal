export const UserProfile = ({
  displayName,
  userName,
  email,
  isEmailVerified,
}) => (
  <div>
    <div>
      <span>Display name: {displayName}</span>
    </div>
    <div>
      <span>Username: {userName}</span>
    </div>
    <div>
      <span>Email: {email}</span>
    </div>
    <div>
      Verified:
      <span>{isEmailVerified ? "Email Verified" : "Email Not Verified"}</span>
    </div>
  </div>
);
