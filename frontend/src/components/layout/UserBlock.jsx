import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { openLoginForm, openRegisterForm, toggleStatusAuth } from "../../slices/ui";
import { Dropdown } from "react-bootstrap";
import { removeToken } from "../../slices/token";

function UserBlock() {

    const dispatch = useDispatch();
    const status = useSelector(state => state.ui.statusAuth);
    const userName = useSelector(state => state.token.userName);

    const handleExit = () => {
        dispatch(toggleStatusAuth(false));
        dispatch(removeToken());
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
    }

    const renderButtons = () => (
        <>
            <div className="col-md-3 text-end">
                <button className="btn btn-outline-primary me-2" type="button" onClick={() => dispatch(openLoginForm())}>
                    Войти
                </button>
                <button className="btn btn-primary" type="button" onClick={() => dispatch(openRegisterForm())}>
                    Регистрация
                </button>
            </div>
            <LoginForm />
            <SignupForm />
        </>
    );

    const renderUserName = () => (
        <div className="col-md-3 text-end">
            <Dropdown>
                <Dropdown.Toggle variant="secondary">
                    {userName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#" onClick={handleExit}>Выход</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );

    const renderMain = status ? renderUserName() : renderButtons();

    return (
        <div className="col-md-3 text-end">
            {renderMain}
        </div>
    )
}

export default UserBlock;