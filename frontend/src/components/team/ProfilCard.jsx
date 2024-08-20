import React from "react";
import { Card } from "react-bootstrap";
import StarsRaintg from "../shared/StarsRating";

function ProfilCardTeam({ data, logo }) {

    const title = data.title.rendered;
    const logoMd = logo.media_details.sizes.medium.source_url;
    const rating = data.acf.overall_rating;
    const league = data.acf.league;

    return (
        <Card style={{ width: '18rem' }}>
            <div className="ratio ratio-4x3">
                <Card.Img variant={'top'} src={logoMd} className="object-fit-cover" />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{league}</Card.Subtitle>
                <StarsRaintg score={rating} />
            </Card.Body>
        </Card>
    )
}

export default ProfilCardTeam;