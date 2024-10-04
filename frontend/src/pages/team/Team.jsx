import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetTeamQuery } from "../../services/api/apiTeams";
import ProfilCard from "../../components/units/ProfilCard";
import ListSkills from "../../components/units/ListSkills";
import RadarDiagram from "../../components/units/RadarDiagram";
import Comments from "../../components/units/Comments";
import ReatingForm from "../../components/units/ReatingForm";
import useQueryStatus from "../../hooks/useQueryStatus";
import SharedCard from '../../components/shared/SharedCard'
import PlayersList from "../../components/units/PlayersList";
import RecentScores from "../../components/units/RecentScores";
import { useSelector } from "react-redux";
import Content from "../../components/units/Content";
import { useTranslation } from "react-i18next";


function Team() {

    const { slug } = useParams()
    const { t } = useTranslation();

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
                    <ProfilCard data={{
                        title: title.rendered,
                        id: id,
                        imgId: acf?.logo,
                    }} />
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
                        <PlayersList teamId={id} />
                    </SharedCard>
                    {content.rendered.length > 0 && <Content title={t('titles.aboutTeam', { name: title.rendered })}>
                        {content.rendered}
                    </Content>}
                    <Comments id={id} />
                    <ReatingForm data={settings} />
                </Col>
            </Row>
        </Container>
    )
}

export default Team;