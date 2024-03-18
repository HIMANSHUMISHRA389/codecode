import React from "react";
import { Carousel } from "react-bootstrap";
import bg1 from "../data/bg1.png";
import mask from "../data/mask.png";
import msg from "../data/msg.png"
import msg2 from "../data/ms2.png"
import blur from "../data/blur.png"
const Home2 = () => {
  return (
    <div
      style={{
        height: "25%",
        width:"100%",
        display: "flex",
        background:
          "linear-gradient(180deg, #7C59A5 0%, #AB689C 34.9%, #DB7987 67.71%, #F89D55 100%)",
      }}
    >
      <div
        style={{
          margin: "1%",
          borderRadius: "10%",
          width: "35%",
          backgroundImage: "bg1",
        }}
      >
        <img
          style={{ width: "90%" }}
          className="d-block "
          src={mask}
          alt="First slide"
        />
      </div>
      <div
        style={{
          margin: "1%",
          borderRadius: "10%",
          backgroundImage: "bg1",
          width: "35%",
        }}
      >
        <img
          style={{ width: "90%" }}
          className="d-block "
          src={blur}
          alt="Second slide"
          
        />
      </div>
      <div style={{ margin: "1%", borderRadius: "10%", width: "35%" }}>
        <img
          style={{ width: "90%" }}
          className="d-block "
          src={msg}
          alt="Third slide"
        />
      </div>
      <div style={{ margin: "1%", borderRadius: "10%", width: "35%" }}>
        <img
          style={{ width: "90%" }}
          className="d-block "
          src={msg2}
          alt="Fourth slide"
        />
      </div>
    </div>
  );
};

export default Home2;
