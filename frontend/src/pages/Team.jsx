import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetTeamQuery, useGetImgQuery } from "../services/api/apiTeams";
import ProfilCard from "../components/units/ProfilCard";
import ListSkills from "../components/units/ListSkills";
import RadarDiagram from "../components/units/RadarDiagram";
import Comments from "../components/units/Comments";
import ReatingForm from "../components/units/ReatingForm";
import { useGetAllScoresQuery, useGetScoresAvgQuery } from "../services/api/apiScores";
import RecentScores from "../components/units/RecentScores";
import useQueryStatus from "../hooks/useQueryStatus";

function Team() {

    const { slug } = useParams()
    const sport = 'hockey'

    const teamQuery = useGetTeamQuery(slug);
    const idImg = teamQuery.data && teamQuery.data.length > 0 ? teamQuery.data[0].acf.logo : null;
    const postId = teamQuery.data && teamQuery.data.length > 0 ? teamQuery.data[0].id : null;
    const imgQuery = useGetImgQuery(idImg);
    const scoresAvgQuery = useGetScoresAvgQuery({ type: 'team', postId: postId, sport: sport });
    const allScoresQuery = useGetAllScoresQuery({ type: 'team', postId: postId, sport: sport });

    const teamStatus = useQueryStatus(teamQuery);
    const imgStatus = useQueryStatus(imgQuery);
    const scoresAvgStatus = useQueryStatus(scoresAvgQuery);
    const allScoresStatus = useQueryStatus(allScoresQuery);

    if (teamStatus) return teamStatus;
    if (imgStatus) return imgStatus;
    if (scoresAvgStatus) return scoresAvgStatus;
    if (allScoresStatus) return allScoresStatus;

    const [team] = teamQuery.data;

    const { avg_rating_value: overallRating } = scoresAvgQuery.data.find(item => item.avg_rating_type === 'overall_rating') || 0;

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ProfilCard data={team} logo={imgQuery} overallRating={overallRating} />
                    <RadarDiagram data={scoresAvgQuery.data} type={'team'} />
                </Col>
                <Col md={9}>
                    <ListSkills data={scoresAvgQuery.data} />
                    <RecentScores data={allScoresQuery.data} />
                    <Comments id={team.id} />
                    <ReatingForm type={'team'} sport={sport} teamId={team.id} />
                </Col>
            </Row>
        </Container>
    )
}

export default Team;