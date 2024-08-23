import React from "react";
import { Container } from 'react-bootstrap'
import MainMenu from "../shared/MainMenu";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { openLoginForm, openRegisterForm } from "../../slices/ui";

function Header() {

    const dispatch = useDispatch();

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
                    <div className="col-md-3 text-end">
                        <button className="btn btn-outline-primary me-2" type="button" onClick={() => dispatch(openLoginForm())}>
                            Войти
                        </button>
                        <button className="btn btn-primary" type="button" onClick={() => dispatch(openRegisterForm())}>
                            Регистрация
                        </button>
                    </div>
                </div>
            </Container>
            <LoginForm />
            <SignupForm />
        </header>

    )
}

export default Header;