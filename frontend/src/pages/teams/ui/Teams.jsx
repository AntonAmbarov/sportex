import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { ProfilCard } from 'widgets/profilCard';
import { selectTeams } from 'entities/team';
import { useGetImg } from 'shared/lib/useGetImg';
import { selectAvgScores } from 'entities/score';

export function Teams() {

    const { ids, entities } = useSelector(selectTeams);
    const { t } = useTranslation();
    const getImg = useGetImg;
    const { entities: avgScores } = useSelector(selectAvgScores);

    return (
        <Container>
            <h1 className="mb-3">{t('titles.teamsPage')}</h1>
            <Row className="row-cols-1 row-cols-md-3 g-4">
                {ids.map(id => {
                    const team = entities[id];
                    const img = getImg(team.acf?.logo); //второй параметр size: thumbnail, medium или full. Если ничего не задано - medium
                    const avgScore = avgScores[id]?.overall_rating;

                    return (
                        <Col key={id}>
                            < ProfilCard
                                key={id}
                                title={team.title.rendered}
                                img={img}
                                score={avgScore}
                                slug={team.slug}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}