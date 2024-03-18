import React from "react";
import image from "../../data/Screenshot (1).png";
import image1 from "../../data/footer-banner.png";
import grass from "../../data/grass.png";
import flowers from "../../data/flowers.png";
import { Button } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1D9697",
          backgroundImage: `url(${image1})`,
          backgroundPosition: "top",
          backgroundSize: "115% 150%",
          backgroundRepeat: "no-repeat",
          overflowY: "hidden",
        }}
      >
        <img
          src={grass}
          alt=""
          width={"200px"}
          style={{
            verticalAlign: "bottom",
            position: "relative",
            bottom: "-80px",
          }}
        />
        <img
          src={flowers}
          alt=""
          width={"8%"}
          style={{
            transform: "rotate(45deg)",
            position: "relative",
            bottom: "-70px",
            left: "-80px",
          }}
        />
      </div>

      <div
        className="row  pb-5"
        style={{
          backgroundColor: "#01549E",
          color: "white",
        }}
      >
        <div className="col-md-2"></div>

        <div className="col-md-8">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center">
              <img src={image} alt="" width={"150px"} />
              <div>
                <Button variant="warning rounded-circle me-2">
                  <FaInstagram className="pb-1 fs-4" />
                </Button>
                <Button variant="warning rounded-circle me-2">
                  <PiYoutubeLogoLight className="pb-1 fs-4" />
                </Button>
                <Button variant="warning rounded-circle me-2">
                  <SlSocialFacebook className="pb-1 fs-4" />
                </Button>
                <Button variant="warning rounded me-2">
                  {" "}
                  <FiMail className="pb-1 fs-4" /> Subscribe
                </Button>
              </div>
            </div>
          </div>
          <br />
          <div>
            <p className="fw-light">© SNUGSHINE. All rights reserved.</p>
            <p className="fw-light">
              All related titles, logos and characters are trademarks of
              SNUGSHINE Ltd
            </p>
          </div>
          <div className="d-flex justify-content-between fw-light">
            <p>Where to buy</p>
            <p>Terms & conditions</p>
            <p>Privacy policy</p>
            <p>Cookie preferences</p>
            <p>Contact us</p>
            <p>About SNUGSHINE</p>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
}

export default Footer;
