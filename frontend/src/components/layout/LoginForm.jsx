import React from 'react';
import { Formik, Form, Field } from 'formik';
import Popap from '../shared/Popap';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginForm } from '../../slices/ui';
import { loginFormSchema } from '../../config/yupConfig';
import { useAuthMutation } from '../../services/api/apiAuth';
import cn from 'classnames';

function LoginForm() {

    const show = useSelector(state => state.ui.loginForm.show);
    const dispatch = useDispatch();
    const [login] = useAuthMutation();

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
            const {token, user_display_name} = await login(values).unwrap();
            localStorage.setItem('token', token)
            localStorage.setItem('userDisplayNname', user_display_name)
            console.log(localStorage.getItem('token'))
        }
        catch(error) {
            alert('Авторизация не удалась')
            console.error(error)
        }
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

export default LoginForm;