import React from 'react';
import { Formik, Form, Field } from 'formik';
import cn from 'classnames';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { closeLoginForm } from 'shared/model/ui';
import { toggleStatusAuth } from 'shared/model/ui';
import { loginFormSchema } from '../model/yupConfig';
import { Popap } from 'shared/ui/popap';
import { setProfil } from 'shared/model/currentUser';
import { useLoginMutation } from '../api/endpoints';

export function LoginForm() {

    const isShow = useSelector(state => state.ui.loginForm.isShow);
    const dispatch = useDispatch();
    const [login] = useLoginMutation();

    const styleField = (isError) => {
        return cn('form-control', {
            'is-invalid': isError
        })
    }

    const initialValues = {
        username: '',
        password: '',
    }

    const handleSubmit = async (values) => {
        try {
            const userData = await login(values).unwrap();

            if (userData) {
                const profile = {
                    userDisplayName: userData.data.displayName,
                    userEmail: userData.data.email,
                    userId: userData.data.id,
                    userName: userData.data.nicename,
                };

                localStorage.setItem('currentUser', JSON.stringify(profile));
                // console.log('token handleSubmit', userData.data.token); //log
                localStorage.setItem('token', userData.data.token);
                // console.log(localStorage.getItem('token')) //log

                dispatch(setProfil({ profile: profile }));
                dispatch(toggleStatusAuth(true));
            }
        }
        catch (error) {
            alert('Авторизация не удалась');
            console.error(error);
        }
    }

    return (
        <Popap title={'Авторизация'} onClose={() => dispatch(closeLoginForm())} show={isShow}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginFormSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-group mb-3">
                            <label htmlFor='username' className='form-label' hidden>Ваш логин</label>
                            <Field type='text' name='username' placeholder='Логин' className={styleField(errors.username && touched.username)} />
                            {errors.username && touched.username ? <div className='invalid-feedback'>{errors.username}</div> : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor='password' className='form-label' hidden>Ваш пароль</label>
                            <Field type='password' name='password' placeholder='Пароль' className={styleField(errors.password && touched.password)} />
                            {errors.password && touched.password ? <div className='invalid-feedback'>{errors.password}</div> : null}
                        </div>
                        <Button as='input' type='submit' value={'Войти'} />
                    </Form>
                )}
            </Formik>
        </Popap>
    )
}