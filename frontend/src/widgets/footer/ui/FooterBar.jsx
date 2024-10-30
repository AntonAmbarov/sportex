import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function FooterBar() {
    return (
        <div className="bg-dark text-white py-4">
            <Container className="d-flex justify-content-between">
                <span>© 2024, Sportex.Pro</span>
                <NavLink
                    to={'/'}
                    className={'text-light text-decoration-none'}
                >
                    Техническая поддержка
                </NavLink>
            </Container>
        </div>
    )
}