import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import './Buttongroup.css';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", marginLeft:"40px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <div className="item">
            <h3>ldfnasjkdjsaijfsahfjhsd</h3>
          </div>
          <div className="item">
            <h3>2</h3>
          </div>
          <div className="item">
            <h3>3</h3>
          </div>
          <div className="item">
            <h3>4</h3>
          </div>
          <div className="item">
            <h3>5</h3>
          </div>
          <div className="item">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}