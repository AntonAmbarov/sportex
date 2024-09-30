import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetPlayerQuery, useGetPhotoQuery } from "../services/api/apiPlayers";
import { useGetAllScoresQuery, useGetScoresAvgQuery } from "../services/api/apiScores";
import ProfilCard from "../components/units/ProfilCard";
import ListSkills from "../components/units/ListSkills";
import RadarDiagram from "../components/units/RadarDiagram";
import Comments from "../components/units/Comments";
import ReatingForm from "../components/units/ReatingForm";
import RecentScores from "../components/units/RecentScores";
import useQueryStatus from "../hooks/useQueryStatus";
import SharedCard from '../components/shared/SharedCard'
import { useSelector } from "react-redux";

function Player() {

    const { slug } = useParams()

    const playerQuery = useGetPlayerQuery(slug);
    const hasPlayerData = playerQuery.data && playerQuery.data.length > 0;
    const { acf, id, title } = hasPlayerData ? playerQuery.data[0] : {};

    const idImg = acf?.photo || null;
    const postId = id || null;
    const allSports = useSelector(state => state.sports.entities);
    const sport = acf?.sport && allSports[acf.sport] ? allSports[acf.sport].slug : null;
    const imgQuery = useGetPhotoQuery(idImg);
    const preset = { type: 'player', postId: postId, sport: sport };
    const scoresAvgQuery = useGetScoresAvgQuery(preset);
    const allScoresQuery = useGetAllScoresQuery(preset);

    const teamStatus = useQueryStatus(playerQuery);
    const imgStatus = useQueryStatus(imgQuery);
    const scoresAvgStatus = useQueryStatus(scoresAvgQuery);
    const allScoresStatus = useQueryStatus(allScoresQuery);

    if (teamStatus) return teamStatus;
    if (imgStatus) return imgStatus;
    if (scoresAvgStatus) return scoresAvgStatus;
    if (allScoresStatus) return allScoresStatus;
    const { avg_rating_value: overallRating } = scoresAvgQuery.data.find(item => item.avg_rating_type === 'overall_rating') || 0;

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ProfilCard title={title.rendered} logo={imgQuery.data} overallRating={overallRating} />
                    <RadarDiagram data={scoresAvgQuery.data} type={'player'} />
                </Col>
                <Col md={9}>
                    <SharedCard title={'Характеристики игрока'}>
                        <ListSkills type={'player'} data={scoresAvgQuery.data} />
                    </SharedCard>
                    <SharedCard title={`Последние оценки`}>
                        <RecentScores data={allScoresQuery.data} />
                    </SharedCard>
                    <Comments id={id} />
                    <ReatingForm type={'player'} sport={sport} participantId={id} teamId={acf.team[0]} role={acf.role} />
                </Col>
            </Row>
        </Container>
    )
}

export default Player;