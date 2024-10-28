import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useGetPlayerQuery } from 'entities/player/api/endpoints';
import { ProfilCard } from 'widgets/profilCard';
import { ListSkills } from 'features/listSkills';
import { RadarDiagram } from 'features/radarDiagram';
import { Comments } from 'features/comments';
import { ReatingForm } from 'features/listSkills';
import { SharedCard } from 'shared/ui/sharedCard';
import { useQueryStatus } from 'shared/lib/useQueryStatus';
import { RecentScores } from 'features/recentScores';

export function Player() {

    const { slug } = useParams();
    const { t } = useTranslation();

    const playerQuery = useGetPlayerQuery(slug);
    const hasPlayerData = playerQuery.data && playerQuery.data.length > 0;
    const { acf, id, title } = hasPlayerData ? playerQuery.data[0] : {};
    const allSports = useSelector(state => state.sports.entities);
    const sport = acf?.sport && allSports[acf.sport] ? allSports[acf.sport].slug : null;

    const playerStatus = useQueryStatus(playerQuery);
    if (playerStatus) return playerStatus;

    const settings = {
        type: 'player',
        postId: id,
        sport: sport,
        teamId: acf.team[0],
        role: acf.role,
    }

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ProfilCard
                        title={title.rendered}
                        id={id}
                        imgId={acf?.logo}
                    />
                    <RadarDiagram data={settings} />
                </Col>
                <Col md={9}>
                    <SharedCard title={t('titles.playerCharacteristics')}>
                        <ListSkills data={settings} />
                    </SharedCard>
                    <SharedCard title={t('titles.recentEvaluations')}>
                        <RecentScores data={settings} />
                    </SharedCard>
                    <Comments id={id} />
                    <ReatingForm data={settings} />
                </Col>
            </Row>
        </Container>
    )
}