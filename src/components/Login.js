import React, { useState, useContext } from "react";
import { LocalContext } from "../Localcontext";
import { Redirect } from "react-router-dom";

const Login = () => {
  const {
    authentication: [auth, setAuth],
    userData: [users, setUsers],
  } = useContext(LocalContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    console.log(userName);
    console.log(password);
    let error = true;
    e.preventDefault();

    users.map((user) => {
      console.log(user.name);
      console.log(user.password);
      if (user.name == userName && user.password === password) {
        console.log("found");
        error = false;
        setAuth({
          isAuthenticated: true,
          loginError: false,
          chartType: user.chart,
        });
      }
    });
    if (error) {
      setAuth({
        isAuthenticated: false,
        loginError: true,
      });
    }
  };
  return auth.isAuthenticated ? (
    <Redirect to="/chart" />
  ) : (
    <div className="login-clean">
      <form
        method="post"
        onSubmit={(e) => {
          handlesubmit(e);
        }}
      >
        <h2 className="sr-only">Login Form</h2>
        <div className="illustration">
          <i className="icon ion-locked"></i>
        </div>
        {auth.loginError ? (
          <div className="alert alert-danger" role="alert">
            Login Failed!
          </div>
        ) : null}

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            value={userName}
            name="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            Log In
          </button>
        </div>
        <a className="forgot" href="#">
          Forgot your email or password?
        </a>
      </form>
    </div>
  );
};

export default Login;
