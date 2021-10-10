import React from "react";
import { useMoralis } from "react-moralis";

const Nav = () => {
  const { authenticate, isAuthenticating, isAuthenticated, user, logout } = useMoralis();

  const controls = isAuthenticated
    ? <button className="login-button" onClick={() => logout()}>Logout {user?.get("username")}</button>
    : <button disabled={isAuthenticating} className="login-button" onClick={() => authenticate()}>
        { isAuthenticating ? <div className="spinner" /> : "Login / Register" }
      </button>

  return (
    <nav className="sidebar with-sidebar">
      <div className="sidebar">{controls}</div>
      <h1 className="not-sidebar">Paperfax</h1>
    </nav>
  );
}

export default Nav
