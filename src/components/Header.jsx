import React from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import amazon from "../data/amazon.png";
import { MdShoppingBag } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavbarToggle } from "react-bootstrap";
import "./custom-styles.css";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "#01549E" }} variant="dark" expand="lg">
      <Container>
        <Row className="w-100">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Navbar.Toggle
              className="custom-toggler "
              aria-controls="basic-navbar-nav"
            />
            <span className="navbar-toggler-icon"></span>
            <img src={amazon} style={{ width: "30%" }} />

            <div className="input-group " style={{ width: "60%" }}>
              <FaSearch
                className="searchIcon"
                style={{
                  position: "relative",
                  left: "12%",
                  "z-index": "5",
                  bottom: "-10px",
                }}
              />{" "}
              {/* Search icon */}
              <input
                type="text"
                className="form-control border-left-0 in"
                placeholder="Search by prouct color,size etc,(eg:skirt,jeans...)"
                style={{
                  borderRadius: "14px",
                  paddingLeft: "14%",
                }}
              />
            </div>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={6}
            style={{ marginLeft: "0", fontSize: "18px" }}
          >
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="mr-auto"
                style={{
                  color: "white !important",
                  justifyContent: "space-around",

                  alignItems: "center",
                }}
              >
                <Nav.Link href="#home">
                  <FaPhoneAlt />
                </Nav.Link>

                <Nav.Link href="#link">Need help?</Nav.Link>
                <Nav.Link href="#home">+912 345 667 876</Nav.Link>
                <Nav.Link>
                  <img
                    style={{ width: "25px", borderRadius: "50%" }}
                    src="https://knowindia.india.gov.in/assets/images/national_flag_inner.jpg"
                  />
                </Nav.Link>
                <Nav.Link href="#home">
                  <RxAvatar />
                </Nav.Link>
                <Nav.Link href="#home">
                  <MdShoppingBag />
                </Nav.Link>

                <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
