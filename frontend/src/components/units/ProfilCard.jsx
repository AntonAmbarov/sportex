import React from "react";
import { Card } from "react-bootstrap";
import StarsRaintg from "./StarsRating";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useGetImg from "../../hooks/useGetImg";

function ProfilCard({ title, id, imgId, slug = null }) {
    const avgScore = useSelector(state => state.avgScores.entities[id]?.overall_rating);
    const img = useGetImg(imgId); //второй параметр size: thumbnail, medium или full. Если ничего не задано - medium

    return (
        <Card className="mb-3">
            <div className="ratio ratio-4x3">
                <Card.Img variant={'top'} src={img} className="object-fit-cover" />
            </div>
            <Card.Body>
                {
                    slug ?
                        <Link to={slug}><Card.Title>{title}</Card.Title></Link>
                        :
                        <Card.Title>{title}</Card.Title>
                }
                {/* <Card.Subtitle>{league}</Card.Subtitle> */}
                <StarsRaintg score={avgScore} />
            </Card.Body>
        </Card>
    )
}

export default ProfilCard;