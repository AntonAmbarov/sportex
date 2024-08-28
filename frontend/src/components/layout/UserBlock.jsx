import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { openLoginForm, openRegisterForm } from "../../slices/ui";

function UserBlock() {

    const dispatch = useDispatch();

    return (
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
    )
}

export default UserBlock;