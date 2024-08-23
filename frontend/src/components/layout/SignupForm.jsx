import React from 'react';
import { Formik, Form, Field } from 'formik';
import Popap from '../shared/Popap';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeRegisterForm } from '../../slices/ui';
import { signupFormSchema } from '../../config/yupConfig';
import cn from 'classnames';

function SignupForm() {

    const show = useSelector(state => state.ui.registerForm.show);
    const dispatch = useDispatch();

    const styleField = (isError) => {
        return cn('form-control', {
            'is-invalid': isError
        })
    }

    const initialValues = {
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const handleSubmit = (values) => {
        alert('Вы зарегистрированы')
    }

    return (
        <Popap title={'Регистрация'} onClose={() => dispatch(closeRegisterForm())} show={show}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={signupFormSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-group mb-3">
                            <label htmlFor='login' className='form-label' hidden>Ваш логин</label>
                            <Field type='text' name='login' placeholder='Логин' className={styleField(errors.login && touched.login)} />
                            {errors.login && touched.login ? <div>{errors.login}</div> : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor='email' className='form-label' hidden>Ваш e-mail</label>
                            <Field type='email' name='email' placeholder='name@example.com' className={styleField(errors.login && touched.login)} />
                            {errors.email && touched.email ? <div className='invalid-feedback'>{errors.email}</div> : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor='password' className='form-label' hidden>Ваш пароль</label>
                            <Field type='password' name='password' placeholder='Пароль' className={styleField(errors.login && touched.login)} />
                            {errors.password && touched.password ? <div className='invalid-feedback'>{errors.password}</div> : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor='confirmPassword' className='form-label' hidden>Подтвердите пароль</label>
                            <Field type='password' name='confirmPassword' placeholder='Подтвердите пароль' className={styleField(errors.login && touched.login)} />
                            {errors.confirmPassword && touched.confirmPassword ? <div className='invalid-feedback'>{errors.confirmPassword}</div> : null}
                        </div>
                        <Button as='input' type='submit' value={'Зарегистрироваться'} />
                    </Form>
                )}
            </Formik>
        </Popap >
    )
}

export default SignupForm;