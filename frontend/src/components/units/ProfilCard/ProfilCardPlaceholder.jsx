import React from "react";
import { Card, Placeholder } from "react-bootstrap";

function ProfilCardPlaceholder() {
    return (
        <Card className="mb-3">
            <div className="ratio ratio-4x3">
                {/* <Card.Img variant={'top'} className="object-fit-cover" /> */}
            </div>
            <Card.Body>
                <Placeholder as={Card.Title} />
                {/* <Card.Title>{'Текст'}</Card.Title> */}
                {/* <StarsRaintg score={0} /> */}
            </Card.Body>
        </Card>
    )
}

export default ProfilCardPlaceholder;