import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isDisabled = () => !username || !password;

  const handleLogin = (e) => {
    setSuccess("");
    setError("");
    e.preventDefault();
    fetch("/api/auth", {
      method: "POST",

      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setSuccess("Success logging in");
      })
      .catch((err) => {
        setError("Error logging in");
      });
  };
  return (
    <form>
      <div>{error}</div>
      <div>{success}</div>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin} disabled={isDisabled()}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
