import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGithub } from "react-icons/di";
import {
  SiAndroid,
    SiPycharm,
  SiVirtualbox,
  SiVisualstudio,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox/>
      </Col>


      
    </Row>
  );
}

export default Toolstack;
