import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetTeamQuery } from 'entities/team/api/endpoints';
import { ProfilCard } from 'widgets/profilCard';
import { ListSkills } from 'features/listSkills';
import { RadarDiagram } from 'features/radarDiagram';
import { Comments } from 'features/comments';
import { useQueryStatus } from 'shared/lib/useQueryStatus';
import { SharedCard } from 'shared/ui/sharedCard';
import { TableListing } from 'widgets/tableListing';
import { RecentScores } from 'features/recentScores';
import { Content } from 'shared/ui/content';
const ReatingForm = lazy(() => import('features/listSkills'));

export function Team() {

    const { slug } = useParams();
    const { t } = useTranslation();
    const isShowForm = useSelector(state => state.ui.reatingOffcanvas.isShow)

    const teamQuery = useGetTeamQuery(slug);
    const hasTeamData = teamQuery.data && teamQuery.data.length > 0;
    const { acf, id, title, content } = hasTeamData ? teamQuery.data[0] : {};

    const allSports = useSelector(state => state.sports.entities);
    const sport = acf?.sport && allSports[acf.sport] ? allSports[acf.sport].slug : null;

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
                        imgId={acf?.logo}
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
                    {isShowForm &&
                        <Suspense fallback={<div>{t('ui.loading')}</div>}>
                            <ReatingForm data={settings} />
                        </Suspense>
                    }
                </Col>
            </Row>
        </Container>
    )
}