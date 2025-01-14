import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'shared/ui/card';

import { StarsRaintg } from 'shared/ui/starsRating';

export function ProfilCard({ title, subtitle, img, score, slug = null }) {

    return (
        <Card>
            <div className="ratio ratio-4x3">
                <CardImg variant={'top'} src={img} className="object-fit-cover" />
            </div>
            <CardBody>
                {
                    slug ?
                        <Link to={slug}><CardTitle>{title}</CardTitle></Link>
                        :
                        <CardTitle>{title}</CardTitle>
                }
                {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
                {score && <StarsRaintg score={score} />}
            </CardBody>
        </Card>
    )
}