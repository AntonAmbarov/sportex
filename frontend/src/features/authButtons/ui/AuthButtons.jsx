import React from 'react';
import { useDispatch } from 'react-redux';

import { openLoginForm, openRegisterForm } from 'shared/model/ui';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export function AuthButtons() {
    const dispatch = useDispatch();
    return (
        <div className="col md-3 text-end">
            <div className='btn-group'>

                <button type='button' className="btn btn-light" onClick={() => dispatch(openLoginForm())}>
                    Войти
                </button>
                <button className='btn btn-primary' onClick={() => dispatch(openRegisterForm())}>
                    Регистрация
                </button>

            </div>

            <LoginForm />
            <SignupForm />
        </div>
    )
}