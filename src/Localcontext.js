import React, { useState, createContext } from "react";

export const LocalContext = createContext();
export const LocalProvider = (props) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    loginError: false,
    loading: true,
    createdAt: [],
    comments: [],
    chartType: "bar",
  });
  const [users, setUsers] = useState([
    {
      name: "John",
      password: "12345",
      chart: "bar",
    },
    {
      name: "MICKY",
      password: "98765",
      chart: "pie",
    },
  ]);

  return (
    <LocalContext.Provider
      value={{ authentication: [auth, setAuth], userData: [users, setUsers] }}
    >
      {props.children}
    </LocalContext.Provider>
  );
};
