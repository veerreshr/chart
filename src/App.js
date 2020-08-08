import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { LocalProvider, LocalContext } from "./Localcontext";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from "./components/Chart";

function App(props) {
  console.log(props);
  return (
    <Router>
      <LocalProvider>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Login} />
          <Route exact path="/chart" component={Chart} />
        </div>
      </LocalProvider>{" "}
    </Router>
  );
}

export default App;
