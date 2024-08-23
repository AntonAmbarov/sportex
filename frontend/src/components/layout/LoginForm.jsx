import React from 'react';
import { Formik, Form, Field } from 'formik';
import Popap from '../shared/Popap';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginForm } from '../../slices/ui';

function LoginForm() {

    const show = useSelector(state => state.ui.loginForm.show);
    const dispatch = useDispatch();

    const initialValues = {
        login: '',
        password: '',
    }

    const handleSubmit = (values) => {
        alert('Форма отправленна')
    }

    return (
        <Popap title={'Авторизация'} onClose={() => dispatch(closeLoginForm())} show={show}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="form-group mb-3">
                        <label htmlFor='login' className='form-label' hidden>Ваш логин</label>
                        <Field type='name' name='login' placeholder='Логин' className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='password' className='form-label' hidden>Ваш пароль</label>
                        <Field type='password' name='password' placeholder='Пароль' className='form-control' />
                    </div>
                    <Button as='input' type='submit' value={'Войти'} />
                </Form>
            </Formik>
        </Popap>
    )
}

export default LoginForm;