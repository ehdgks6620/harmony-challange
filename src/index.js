import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import Header from "./Header";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Header></Header>
    <App></App>
  </HashRouter>,
  document.getElementById("root")
);
