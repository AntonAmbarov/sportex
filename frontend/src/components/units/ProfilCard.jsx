import React from "react";
import { Card } from "react-bootstrap";
import StarsRaintg from "./StarsRating";
import { paths } from "../../config/apiConfig";

function ProfilCardTeam({ data, logo }) {

    const title = data.title.rendered;
    const logoMd = logo?.media_details?.sizes?.medium?.source_url ||
        logo?.media_details?.sizes?.full?.source_url ||
        paths.getDefaultImg();
    const rating = data.acf.overall_rating;
    const league = data.acf.league;

    return (
        <Card className="mb-3">
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