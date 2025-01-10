import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ProfilCard } from 'widgets/profilCard';
import { ListSkills } from 'features/listSkills';
import { RadarDiagram } from 'features/radarDiagram';
import { Comments } from 'features/comments';
import { RecentScores } from 'features/recentScores';
import { useGetPlayerQuery } from 'entities/player';
import { SharedCard } from 'shared/ui/sharedCard';
import { useQueryStatus } from 'shared/lib/useQueryStatus';
import { selectSports } from 'entities/sport';
import { isData } from 'shared/lib/isData';
import { useGetImg } from 'shared/lib/useGetImg';
import { selectAvgScoreById } from 'entities/score';

export function Player() {

    const { slug } = useParams();
    const { t } = useTranslation();

    const playerQuery = useGetPlayerQuery(slug);
    const hasPlayerData = isData(playerQuery);
    const { acf, id, title } = hasPlayerData ? playerQuery.data[0] : {};
    const { entities: allSports } = useSelector(selectSports);
    const sport = acf?.sport && allSports[acf.sport] ? allSports[acf.sport].slug : null;
    const img = useGetImg(acf?.logo); //второй параметр size: thumbnail, medium или full. Если ничего не задано - medium
    const avgScore = useSelector(state => selectAvgScoreById(state, id));

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
                        img={img}
                        score={avgScore}
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
                </Col>
            </Row>
        </Container>
    )
}