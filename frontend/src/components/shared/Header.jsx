import React, { useState } from "react";
import { Container, Row, Col, Nav, } from 'react-bootstrap'

function Header() {
    const [activeKey, setActiveKey] = useState(1)
    const handleSelect = (eventKey) => {
        setActiveKey(eventKey);
    }

    return (
        <header>
            <Container>
                <Row>
                    <Col>Логотип</Col>
                    <Col>
                        <Nav variant="pills" activeKey={activeKey} onSelect={handleSelect} fill>
                            <Nav.Item>
                                <Nav.Link eventKey={1} href="/teams">
                                    Команды
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="/players">
                                    Игроки
                                </Nav.Link>
                                <Nav.Link eventKey={3} href="#">
                                    Виды спорта
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>Регистрация / Вход</Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;