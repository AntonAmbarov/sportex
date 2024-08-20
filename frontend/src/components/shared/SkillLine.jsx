import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

function SkillLine({ name, score }) {
    return (
        <Row>
            <Col xs={6}><span className="h6 ps-2">{name}</span></Col>
            <Col xs={6} className="pe-3 text-end text-muted"><span className="h6">{`${score}/10`}</span></Col>
            <Col xs={12}><ProgressBar now={score} max={10}></ProgressBar></Col>
        </Row>
    )
}

export default SkillLine;