import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import grades from "../../config/grades";

function SkillLine({ name, score }) {
    const { max } = grades;
    return (
        <Row>
            <Col xs={6}><span className="h6 ps-2">{name}</span></Col>
            <Col xs={6} className="pe-3 text-end text-muted"><span className="h6">{`${score}/${max}`}</span></Col>
            <Col xs={12}><ProgressBar now={score} max={max}></ProgressBar></Col>
        </Row>
    )
}

export default SkillLine;