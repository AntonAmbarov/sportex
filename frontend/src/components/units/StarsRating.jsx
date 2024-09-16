import React from "react";
import grades from "../../config/grades";
import { Row, Col, Badge } from 'react-bootstrap';

function StarsRaintg({ score }) {
    return (
        <Row className="justify-content-between">
            <Col xs='auto'>
                {[...Array(grades.max)].map((_, index) => (
                    <i key={index} className={
                        index < score ? 'bi bi-star-fill text-warning' : 'bi bi-star text-warning'
                    } />
                ))}
            </Col>
            <Col xs='auto'>
                <Badge bg='secondary'>{score}</Badge>
            </Col>
        </Row>

    )
}

export default StarsRaintg;