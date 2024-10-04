import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetPlayerQuery } from "../services/api/apiPlayers";
import ProfilCard from "../components/units/ProfilCard";
import ListSkills from "../components/units/ListSkills";
import RadarDiagram from "../components/units/RadarDiagram";
import Comments from "../components/units/Comments";
import ReatingForm from "../components/units/ReatingForm";
import SharedCard from '../components/shared/SharedCard';
import RecentScores from "../components/units/RecentScores";
import useQueryStatus from "../hooks/useQueryStatus";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Player() {

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
                    <ProfilCard data={{
                        title: title.rendered,
                        id: id,
                        imgId: acf?.photo,
                    }} />
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

export default Player;