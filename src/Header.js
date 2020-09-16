import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";

class Header extends Component {
  state = {
    button_one: "block",
    button_two: "none",
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const button1 = {
      display: this.state.button_one,
      isSub: null,
      isPro: null,
      isClass: null,
    };

    return (
      <div className="headerForm">
        <Link to="/" style={button1}>
          <button type="button" className="btn main">
            Main
          </button>
        </Link>
        <Link
          to={{
            pathname: "/write",
          }}
          style={button1}
        >
          <button type="button" className="btn login">
            write
          </button>
        </Link>
        <Link to="/join" style={button1}>
          <button type="button" className="btn join">
            Join
          </button>
        </Link>
      </div>
    );
  }
}

export default Header;
