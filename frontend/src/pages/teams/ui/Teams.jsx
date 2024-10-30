import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ProfilCard } from 'widgets/profilCard';

export function Teams() {

    console.log('run: teams')
    const { ids, entities } = useSelector(state => state.teams);
    const { t } = useTranslation();

    console.log(ids)

    return (
        <Container>
            <h1 className="mb-3">{t('titles.teamsPage')}</h1>
            <Row className="row-cols-1 row-cols-md-3 g-4">
                {ids.map(id => {
                    const team = entities[id];
                    return (
                        <Col key={id}>
                            < ProfilCard
                                key={id}
                                id={id}
                                title={team.title.rendered}
                                imgId={team.acf?.logo}
                                slug={team.slug}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}