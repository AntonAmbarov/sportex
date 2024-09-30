import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetTeamQuery, useGetImgQuery } from "../../services/api/apiTeams";
import ProfilCard from "../../components/units/ProfilCard";
import ListSkills from "../../components/units/ListSkills";
import RadarDiagram from "../../components/units/RadarDiagram";
import Comments from "../../components/units/Comments";
import ReatingForm from "../../components/units/ReatingForm";
import { useGetAllScoresQuery, useGetScoresAvgQuery } from "../../services/api/apiScores";
import RecentScores from "../../components/units/RecentScores";
import useQueryStatus from "../../hooks/useQueryStatus";
import SharedCard from '../../components/shared/SharedCard'
import PlayersList from "../../components/units/PlayersList";
import { useSelector } from "react-redux";


function Team() {

    const { slug } = useParams()

    const teamQuery = useGetTeamQuery(slug);
    const hasTeamData = teamQuery.data && teamQuery.data.length > 0;
    const { acf, id, title } = hasTeamData ? teamQuery.data[0] : {};

    const idImg = acf?.logo || null;
    const postId = id || null;
    const allSports = useSelector(state => state.sports.entities);
    const sport = acf?.sport && allSports[acf.sport] ? allSports[acf.sport].slug : null;

    const imgQuery = useGetImgQuery(idImg);
    const preset = { type: 'team', postId: postId, sport: sport };
    const scoresAvgQuery = useGetScoresAvgQuery(preset);
    const allScoresQuery = useGetAllScoresQuery(preset);

    const teamStatus = useQueryStatus(teamQuery);
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
                    <ProfilCard title={title.rendered} logo={imgQuery} overallRating={overallRating} />
                    <RadarDiagram data={scoresAvgQuery.data} type={'team'} />
                </Col>
                <Col md={9}>
                    <SharedCard title={'Характеристики команды'}>
                        <ListSkills type={'team'} data={scoresAvgQuery.data} />
                    </SharedCard>
                    <SharedCard title={`Последние оценки`}>
                        <RecentScores data={allScoresQuery.data} />
                    </SharedCard>
                    <SharedCard title={'Игроки команды'}>
                        <PlayersList teamId={id} />
                    </SharedCard>
                    <Comments id={id} />
                    <ReatingForm type={'team'} sport={sport} teamId={id} />
                </Col>
            </Row>
        </Container>
    )
}

export default Team;