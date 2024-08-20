import React from "react";
import { Card } from "react-bootstrap";

function ProfilCardTeam({ data, logo }) {

    const title = data.title.rendered;
    const logoMd = logo.media_details.sizes.medium.source_url;

    return (
        <Card>
            <Card.Img variant={'top'} src={logoMd} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default ProfilCardTeam;