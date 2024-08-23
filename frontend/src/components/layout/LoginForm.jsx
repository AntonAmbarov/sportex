import React from 'react';
import { Formik, Form, Field } from 'formik';
import Popap from '../shared/Popap';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginForm } from '../../slices/ui';
import { loginFormSchema } from '../../config/yupConfig';
import cn from 'classnames';

function LoginForm() {

    const show = useSelector(state => state.ui.loginForm.show);
    const dispatch = useDispatch();

    const styleField = (isError) => {
        return cn('form-control', {
            'is-invalid': isError
        })
    }

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
                validationSchema={loginFormSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-group mb-3">
                            <label htmlFor='login' className='form-label' hidden>Ваш логин</label>
                            <Field type='text' name='login' placeholder='Логин' className={styleField(errors.login && touched.login)} />
                            {errors.login && touched.login ? <div className='invalid-feedback'>{errors.login}</div> : null}
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

export default LoginForm;