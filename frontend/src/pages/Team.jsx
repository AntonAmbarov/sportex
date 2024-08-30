import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useGetTeamQuery, useGetImgQuery } from "../services/api/apiTeams";
import ProfilCard from "../components/team/ProfilCard";
import ListSkills from "../components/team/ListSkills";
import RadarDiagram from "../components/shared/RadarDiagram";
import Comments from "../components/shared/Comments";

function Team() {

    const { slug } = useParams()
    const { data, error, isLoading } = useGetTeamQuery(slug);

    const idImg = data && data.length > 0 ? data[0].acf.logo : null;
    const { data: imgData, error: imgError, isLoading: imgIsLoading } = useGetImgQuery(idImg);

    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>);
    if (!data || data.length === 0) return (<div>Нет данных</div>);

    if (imgIsLoading) return (<div>Загрузка</div>);
    if (imgError) return (<div>Ошибка</div>);
    if (!imgData || imgData.length === 0) return (<div>Нет данных</div>);

    const [team] = data;

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ProfilCard data={team} logo={imgData} />
                    <RadarDiagram data={team} type={'team'} />
                </Col>
                <Col md={9}>
                    <ListSkills data={team.acf} />
                    <Comments id={team.id} />
                </Col>
            </Row>
        </Container>
    )
}

export default Team;