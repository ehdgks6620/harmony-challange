import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/Title.css";

class Title extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slideForm">
        <Slider {...settings} className="slider">
          <div className="a">
            <h3>A</h3>
          </div>
          <div className="b">
            <h3>B</h3>
          </div>
          <div className="c">
            <h3>C</h3>
          </div>
          <div className="d">
            <h3>D</h3>
          </div>
          <div className="e">
            <h3>F</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Title;
