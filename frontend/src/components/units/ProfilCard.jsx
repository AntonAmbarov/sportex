import React from "react";
import { Card } from "react-bootstrap";
import StarsRaintg from "./StarsRating";
import { paths } from "../../config/apiConfig";
import { useSelector } from "react-redux";

function ProfilCard({ data }) {
    const { title, id, imgId } = data;
    const images = useSelector(state => state.imgs.entities);
    const avgScore = useSelector(state => state.avgScores.entities[id]?.overall_rating);

    const img = images[imgId]?.media_details?.sizes?.medium?.source_url ||
        images[imgId]?.media_details?.sizes?.full?.source_url ||
        paths.getDefaultImg();

    return (
        <Card className="mb-3">
            <div className="ratio ratio-4x3">
                <Card.Img variant={'top'} src={img} className="object-fit-cover" />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Subtitle>{league}</Card.Subtitle> */}
                <StarsRaintg score={avgScore} />
            </Card.Body>
        </Card>
    )
}

export default ProfilCard;