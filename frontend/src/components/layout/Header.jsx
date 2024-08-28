import React from "react";
import { Container } from 'react-bootstrap'
import MainMenu from "../shared/MainMenu";
import UserBlock from './UserBlock';

function Header() {

    return (
        <header className="border-bottom mb-4">
            <Container>
                <div className="
                    d-flex
                    flex-wrap
                    align-items-center
                    justify-content-center
                    justify-content-md-between
                    p-3
                ">
                    <a href="/" className="d-flex align-items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="currentColor"
                            className="bi bi-1-square-fill me-2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                        </svg>
                    </a>
                    <MainMenu variant="header" />
                    <UserBlock />
                </div>
            </Container>
        </header>
    )
}

export default Header;