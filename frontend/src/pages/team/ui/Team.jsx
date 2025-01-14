import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ProfilCard } from 'widgets/profilCard';
import { TableListing } from 'widgets/tableListing';
import { ListSkills } from 'features/listSkills';
import { RadarDiagram } from 'features/radarDiagram';
import { Comments } from 'features/comments';
import { RecentScores } from 'features/recentScores';
import { useGetTeamQuery } from 'entities/team/api/endpoints';
import { useQueryStatus } from 'shared/lib/useQueryStatus';
import { SharedCard } from 'widgets/sharedCard';
import { Content } from 'shared/ui/content';
import { selectSports } from 'entities/sport';
import { isData } from 'shared/lib/isData';
import { useGetImg } from 'shared/lib/useGetImg';
import { selectAvgScoreById } from 'entities/score';

export function Team() {

    const { slug } = useParams();
    const { t } = useTranslation();

    const teamQuery = useGetTeamQuery(slug);
    const hasTeamData = isData(teamQuery);
    const { acf, id, title, content } = hasTeamData ? teamQuery.data[0] : {};

    const { entities: allSports } = useSelector(selectSports);
    const sport = acf?.sport && allSports[acf.sport] ? allSports[acf.sport].slug : null;
    const img = useGetImg(acf?.logo); //второй параметр size: thumbnail, medium или full. Если ничего не задано - medium
    const avgScore = useSelector(state => selectAvgScoreById(state, id));

    const teamStatus = useQueryStatus(teamQuery);
    if (teamStatus) return teamStatus;

    const settings = {
        type: 'team',
        postId: id,
        sport: sport,
    }

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ProfilCard
                        title={title?.rendered}
                        id={id}
                        img={img}
                        score={avgScore}
                    />
                    <RadarDiagram data={settings} />
                </Col>
                <Col md={9}>
                    <SharedCard title={t('titles.teamCharacteristics')}>
                        <ListSkills data={settings} />
                    </SharedCard>
                    <SharedCard title={t('titles.recentEvaluations')}>
                        <RecentScores data={settings} />
                    </SharedCard>
                    <SharedCard title={t('titles.teamPlayers', { name: title.rendered })}>
                        <TableListing teamId={id} />
                    </SharedCard>
                    {content?.rendered && content.rendered.length > 0 && <Content title={t('titles.aboutTeam', { name: title.rendered })}>
                        {content.rendered}
                    </Content>}
                    <Comments id={id} />
                </Col>
            </Row>
        </Container>
    )
}