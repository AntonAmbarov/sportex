import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { MainMenu } from 'shared/ui/mainMenu';
import { FooterBar } from './footerBar';

const yourAccaunt = [{ name: 'Вход', path: '/' }, { name: 'Регистрация', path: '/' }];
const information = [{ name: 'Конфиденциальность', path: '/' }];

function Footer() {
    return (
        <footer className={'bg-secondary text-white'}>
            <Container className="py-4">
                <Row>
                    <Col md={4}>
                        <span className="h5">Разделы</span>
                        <MainMenu variant={'footer'} />
                    </Col>
                    <Col md={4}>
                        <span className="h5">Информация</span>
                        <ul className="list-unstyled">
                            {information.map(elem => (
                                <li key={elem.path}>
                                    <NavLink
                                        to={elem.path}
                                        className={'text-light text-decoration-none'}
                                    >
                                        {elem.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={4}>
                        <span className="h5">Ваш аккаунт</span>
                        <ul className="list-unstyled">
                            {yourAccaunt.map(elem => (
                                <li key={elem.path}>
                                    <NavLink
                                        to={elem.path}
                                        className={'link-light text-decoration-none'}
                                    >
                                        {elem.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <FooterBar />
        </footer>
    )
}

export default Footer