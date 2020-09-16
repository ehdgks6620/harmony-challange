import React, { Component } from "react";
import BoardWrite from "./BoardWrite";
import "./style/App.css";
import { Route, Redirect } from "react-router-dom";
import Body from "./Body";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Body}></Route>
        <Route
          exact
          path="/board/:subject/:professor/:class"
          component={Board}
        ></Route>
        <Route exact path="/write" component={BoardWrite}></Route>
        <Route exact path="/gram" component={BoardWrite}></Route>
        <Redirect path="*" to="/"></Redirect>
      </div>
    );
  }
}

export default App;
