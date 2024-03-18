import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mask from "../data/mask.png";
import msg from "../data/msg.png";
import msg2 from "../data/ms2.png";
import blur from "../data/blur.png";
import home1 from "../data/home.png";
import books from "../data/books.png"
const Last = () => {
  return (
    <div style={{ width: "75%", margin: "0 12% 1% 12%", height: "110%" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="image-box">
            <img src={mask} alt="Image 1" style={{ width: "100%" }} />
          </div>
          <div className="image-box">
            <img src={blur} alt="Image 2" style={{ width: "100%" }} />
          </div>
          <div className="image-box">
            <img src={msg2} alt="Image 2" style={{ width: "100%" }} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent:"space-around",
            marginTop: "2%",
          }}
        >
          <div>
            <img
              src={home1}
              alt="Image 1"
              style={{ width: "85%", borderRadius: "20px" }}
            />
          </div>

          <div>
            <img
              src={books}
              alt="Image 2"
              style={{ width: "85%", borderRadius: "20px" }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Last;
