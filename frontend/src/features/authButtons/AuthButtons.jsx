import React from 'react';
import { useDispatch } from 'react-redux';
import { ButtonGroup, Button, Col } from 'react-bootstrap';
import { LoginForm } from 'features/loginForm';
import { SignupForm } from 'features/signupForm';
import { openLoginForm, openRegisterForm } from 'shared/model/ui';

export function AuthButtons() {
    const dispatch = useDispatch();
    return (
        <Col md={3} className="text-end">
            <ButtonGroup>

                <Button variant="outline-primary" className="me-2" onClick={() => dispatch(openLoginForm())}>
                    Войти
                </Button>
                <Button variant="primary" onClick={() => dispatch(openRegisterForm())}>
                    Регистрация
                </Button>

            </ButtonGroup>

            <LoginForm />
            <SignupForm />
        </Col>
    )
}