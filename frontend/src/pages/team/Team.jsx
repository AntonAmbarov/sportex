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


function Team() {

    const { slug } = useParams()

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
                    <SharedCard title={'Характеристики команды'}>
                        <ListSkills data={settings} />
                    </SharedCard>
                    <SharedCard title={`Последние оценки`}>
                        <RecentScores data={settings} />
                    </SharedCard>
                    <SharedCard title={'Игроки команды'}>
                        <PlayersList teamId={id} />
                    </SharedCard>
                    {content.rendered.length > 0 && <Content title={'Подробнее о команде'}>
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