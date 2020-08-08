import React, { useEffect, useContext, Fragment } from "react";
import { LocalContext } from "../Localcontext";
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";
import axios from "axios";
import moment from "moment";
import { Redirect } from "react-router-dom";

const Chart = () => {
  const {
    authentication: [auth, setAuth],
    userData: [users, setUsers],
  } = useContext(LocalContext);
  const fetchData = async () => {
    let createdAt = [];
    let comments = [];
    const response = await axios.get(
      "https://api.github.com/repositories/19438/issues"
    );
    response.data.map((issue) => {
      createdAt.push(moment(issue.created_at).format("L"));
      comments.push(issue.comments);
    });
    setAuth((prev) => {
      return {
        ...prev,
        createdAt,
        comments,
        loading: false,
      };
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return auth.isAuthenticated ? (
    <div className="container mt-4">
      {!auth.loading ? (
        auth.chartType === "bar" ? (
          <ColumnChart />
        ) : (
          <PieChart />
        )
      ) : null}
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Chart;
