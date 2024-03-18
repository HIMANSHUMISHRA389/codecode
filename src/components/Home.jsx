import React from "react";
import { Button } from "react-bootstrap";
import headerimg from "../data/WhatsApp_Image_2024-03-15_at_6.10.02_PM-removebg-preview.png";
import sliderimg from "../data/slider.jpeg";

import Carousel from "react-bootstrap/Carousel";


function Home() {
  return (
    <div>
      <div className="row banner">
        <div className="col-md-2"></div>
        <div className="col-md-8 p-5">
          <img
            src={headerimg}
            width={"10%"}
            alt=""
            style={{
              position: "relative",
              left: "4%",
              top: "6%",
              width: "18%",
            }}
          />
          <div className="d-flex p-3 align-items-center rounded bg-light">
            <Button variant="light">Shop</Button>
            <Button variant="light">Charecters</Button>
            <Button variant="light">Activities</Button>
            <Button variant="light">Help center</Button>
            <Button variant="light">Blog</Button>
          </div>
          <div className="mt-3 mb-3">
            <Carousel indicators={false} data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sliderimg}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sliderimg}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sliderimg}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Home;
