import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { StarsRaintg } from 'shared/ui/starsRating';
import { useGetImg } from 'shared/lib/useGetImg';
import { selectAvgScoreById } from 'entities/score';

export function ProfilCard({ title, id, imgId, slug = null }) {
    const avgScore = useSelector(state => selectAvgScoreById(state, id));
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