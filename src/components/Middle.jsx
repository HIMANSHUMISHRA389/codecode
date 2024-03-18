import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./VerticalSlider.css";
// Import CSS file for styling
import mask from "../data/mask.png";
import msg from "../data/msg.png";
import msg2 from "../data/ms2.png";
import blur from "../data/blur.png";
import a from "../data/baby.png";
import r from "../data/r.png";
const Middle = () => {
  return (
    <div
      class="main"
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "70%",
        marginLeft: "12%",
        marginRight: "15%",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "45%",
          height: "100%",
          borderRadius: "40px",
          borderRadius: "20px",
        }}
      >
        <img
          src={a}
          style={{
            height: "812px",
            margin: "2% 0%",
            width: "100%",
          }}
        />
      </div>
      <div
        class="slider-container"
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
          padding: "2%",
          backgroundImage: `url(${r})`,
        }}
      >
        <div
          class="slider"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div class="slide1">
            <img src={mask} />
          </div>
          <div class="slide1">
            <img src={msg} />
          </div>
          <div class="slide1">
            <img src={msg2} />
          </div>
          <div class="slide1">
            <img src={blur} />
          </div>
          <div class="slide1">
            <img src={mask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
