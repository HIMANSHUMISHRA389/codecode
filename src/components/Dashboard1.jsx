import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { PiArrowBendDownRightThin } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";

function Dashboard1() {
  return (
    <div
      className="row w-100"
      style={{
        height: "110vh",
        background:
          "linear-gradient(134deg, #333d6c, rgb(75 122 236), #0e1b3c)",
      }}
    >
      <div
        className="col-md-3"
        style={{
          background: "linear-gradient(145deg, black, rgb(80 63 126 / 5%))",
        }}
      >
        <div className="text-justify m-4">
          <Accordion defaultActiveKey="0" style={{ border: "transparent" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p>Events</p>
              </Accordion.Header>

              <Accordion.Body>
                <Button className=" border-before1 m-0 p-0">
                  <PiArrowBendDownRightThin style={{ fontSize: "19px" }} />
                  New Request
                </Button>
                <br />
                <Button className=" border-before m-0 p-0">
                  <PiArrowBendDownRightThin style={{ fontSize: "19px" }} />
                  Estimate
                </Button>
                <br />
                <Button className=" border-before m-0 p-0">
                  <PiArrowBendDownRightThin style={{ fontSize: "19px" }} />
                  Events
                </Button>
                <br />
                <Button className=" border-before m-0 p-0">
                  <PiArrowBendDownRightThin style={{ fontSize: "19px" }} />
                  Partial Requests
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <div style={{ padding: "0px 20px" }}>
            {/* positions */}
            <Button className=" m-0 p-0">Positions</Button>
            <br />

            {/* Contractors */}
            <Button className=" m-0 p-0">Contractors</Button>
          </div>

          {/* users */}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p>Users</p>
              </Accordion.Header>

              <Accordion.Body>
                <Button className=" border-before1 m-0 p-0">
                  <PiArrowBendDownRightThin style={{ fontSize: "19px" }} />
                  User 1
                </Button>
                <br />
                <Button className=" border-before m-0 p-0">
                  <PiArrowBendDownRightThin style={{ fontSize: "19px" }} />
                  User 2
                </Button>
                <br />

                <Button className=" m-0 p-0 border-before">
                  <PiArrowBendDownRightThin style={{ fontSize: "19px" }} />
                  User 3
                </Button>
                <br />

                <Button className=" m-0 p-0 border-before">
                  <PiArrowBendDownRightThin style={{ fontSize: "19px" }} />
                  User 4
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <div style={{ padding: "0px 20px" }}>
            {/* Contractors */}
            <Button className=" m-0 p-0">Profile</Button>
            <br />
          </div>
        </div>
        <div className="m-4">
          <button
            className="btn btn-dark w-100"
            style={{ position: "relative" }}
          >
            <CiLogout className="me-2" />
            Logout
          </button>
        </div>
      </div>
      <div className="col-md-9">
        <h1> test2</h1>
      </div>
    </div>
  );
}

export default Dashboard1;
