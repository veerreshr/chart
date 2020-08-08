import React, { useContext, Fragment } from "react";
import { LocalContext } from "../Localcontext";

const Navbar = () => {
  const {
    authentication: [auth, setAuth],
    userData: [users, setUsers],
  } = useContext(LocalContext);
  const logout = () => {
    setAuth({
      isAuthenticated: false,
      loginError: false,
      loading: true,
      createdAt: [],
      comments: [],
      chartType: "bar",
    });
  };
  return (
    <nav className="navbar navbar-dark navbar-expand-md navigation-clean-button">
      <div className="container">
        <button className="navbar-brand no-decoration">Charts</button>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav mr-auto"></ul>
          <span className="navbar-text actions">
            {auth.isAuthenticated ? (
              <button className="login no-decoration" onClick={logout}>
                Log Out
              </button>
            ) : (
              <Fragment>
                <button className="login no-decoration">Log In</button>
                <button className="btn btn-light action-button" role="button">
                  Sign Up
                </button>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
