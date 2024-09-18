import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetTeamQuery, useGetImgQuery } from "../services/api/apiTeams";
import ProfilCard from "../components/units/ProfilCard";
import ListSkills from "../components/units/ListSkills";
// import RadarDiagram from "../components/units/RadarDiagram";
import Comments from "../components/units/Comments";
import ReatingForm from "../components/units/ReatingForm";
import { useGetAllScoresQuery, useGetScoresAvgQuery } from "../services/api/apiScores";
import RecentScores from "../components/units/RecentScores";

function Team() {

    const { slug } = useParams()
    const sport = 'hockey'

    const { data: teamData, error: teamError, isLoading: teamIsLoading } = useGetTeamQuery(slug);
    const idImg = teamData && teamData.length > 0 ? teamData[0].acf.logo : null;
    const postId = teamData && teamData.length > 0 ? teamData[0].id : null;

    const { data: imgData, error: imgError, isLoading: imgIsLoading } = useGetImgQuery(idImg);
    const { data: scoresData, error: scoresError, isLoading: scoresIsLoading } = useGetScoresAvgQuery({ type: 'team', postId: postId, sport: sport });
    const { data: scoresListData, error: scoresListError, isLoading: scoresListIsLoading } = useGetAllScoresQuery({ type: 'team', postId: postId, sport: sport })

    if (teamIsLoading) return (<div>Загрузка</div>);
    if (teamError) return (<div>Ошибка</div>);
    if (!teamData || teamData.length === 0) return (<div>Нет данных</div>);

    if (imgIsLoading) return (<div>Загрузка</div>);
    if (imgError) return (<div>Ошибка</div>);
    if (!imgData || imgData.length === 0) return (<div>Нет данных</div>);

    if (scoresIsLoading) return (<div>Загрузка</div>);
    if (scoresError) return (<div>Ошибка</div>);
    if (!scoresData || scoresData.length === 0) return (<div>Нет данных</div>);

    if (scoresListIsLoading) return (<div>Загрузка</div>);
    if (scoresListError) return (<div>Ошибка</div>);
    if (!scoresListData || scoresListData.length === 0) return (<div>Нет данных</div>);

    const [team] = teamData;

    const { avg_rating_value: overallRating } = scoresData.find(item => item.avg_rating_type === 'overall_rating') || 0;

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ProfilCard data={team} logo={imgData} overallRating={overallRating} />
                    {/* <RadarDiagram data={team} type={'team'} /> */}
                </Col>
                <Col md={9}>
                    <ListSkills data={scoresData} />
                    <RecentScores data={scoresListData} />
                    <Comments id={team.id} />
                    <ReatingForm type={'team'} sport={sport} teamId={team.id} />
                </Col>
            </Row>
        </Container>
    )
}

export default Team;