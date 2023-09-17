import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiMysql,
  DiHtml5,
  DiPhp,
  DiCss3,
  DiEclipse,
  DiJavascript,
  DiBootstrap
  
} from "react-icons/di";
import {
  SiFirebase
} from "react-icons/si";

function Techstack() {
  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap/>
      </Col>
    </Row>
  );
}

export default Techstack;
