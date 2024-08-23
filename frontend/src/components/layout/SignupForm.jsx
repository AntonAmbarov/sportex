import React from 'react';
import { Formik, Form, Field } from 'formik';
import Popap from '../shared/Popap';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeRegisterForm } from '../../slices/ui';

function SignupForm() {

    const show = useSelector(state => state.ui.registerForm.show);
    const dispatch = useDispatch();

    const initialValues = {
        login: '',
        password: '',
    }

    const handleSubmit = (values) => {
        alert('Вы зарегистрированы')
    }

    return (
        <Popap title={'Регистрация'} onClose={() => dispatch(closeRegisterForm())} show={show}>
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
                        <label htmlFor='email' className='form-label' hidden>Ваш e-mail</label>
                        <Field type='email' name='email' placeholder='name@example.com' className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='password' className='form-label' hidden>Ваш пароль</label>
                        <Field type='password' name='password' placeholder='Пароль' className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor='confirmPassword' className='form-label' hidden>Подтвердите пароль</label>
                        <Field type='password' name='confirmPassword' placeholder='Подтвердите пароль' className='form-control' />
                    </div>
                    <Button as='input' type='submit' value={'Зарегистрироваться'} />
                </Form>
            </Formik>
        </Popap>
    )
}

export default SignupForm;