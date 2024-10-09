import React from "react";
import { Card } from "react-bootstrap";

function SharedCard({ title, children }) {
    return (
        <Card className="mb-3">
            <Card.Header>
                <h2>{title}</h2>
            </Card.Header>
            <Card.Body className="p-3">
                {children}
            </Card.Body>
        </Card>
    )
}

export default SharedCard;