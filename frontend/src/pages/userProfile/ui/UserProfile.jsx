import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentUser } from 'shared/model/currentUser';
import { SharedCard } from "widgets/sharedCard";
import { ProfilCard } from "widgets/profilCard";

export function UserProfile() {

    const {
        userName,
        avatar,
        userEmail,
        firstName,
        lastName,
    } = useSelector(selectCurrentUser);


    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ProfilCard
                        title={userName}
                        subtitle={`${firstName} ${lastName}`}
                        img={avatar}
                    />
                </Col>
                <Col md={9}>
                    <SharedCard title={'Профиль пользователя'}>
                        <ListGroup>
                            <ListGroupItem>{`${firstName} ${lastName}`}</ListGroupItem>
                            <ListGroupItem>{userEmail}</ListGroupItem>
                        </ListGroup>
                    </SharedCard>
                </Col>
            </Row>
        </Container >
    )
}