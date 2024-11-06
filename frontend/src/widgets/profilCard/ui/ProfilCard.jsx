import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { StarsRaintg } from 'shared/ui/starsRating';

export function ProfilCard({ title, subtitle, img, score, slug = null }) {

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
                {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
                {score && <StarsRaintg score={score} />}
            </Card.Body>
        </Card>
    )
}