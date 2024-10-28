import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { closeRegisterForm } from 'shared/model/ui';
import { signupFormSchema } from 'shared/yup';
import { useRegisterMutation, useLoginMutation } from 'shared/api/auth';
import { Popap } from 'shared/ui/popap';

export function SignupForm() {

    const isShow = useSelector(state => state.ui.registerForm.isShow);
    const dispatch = useDispatch();
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();

    const styleField = (isError) => {
        return cn('form-control', {
            'is-invalid': isError
        })
    }

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const handleSubmit = async (values) => {
        try {
            await register(values).unwrap();
            login(values);
        }
        catch (error) {
            alert('Регистрация не удалась')
            console.error(error)
        }
    }

    return (
        <Popap title={'Регистрация'} onClose={() => dispatch(closeRegisterForm())} show={isShow}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={signupFormSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-group mb-3">
                            <label htmlFor='username' className='form-label' hidden>Ваш логин</label>
                            <Field type='text' name='username' placeholder='Логин' className={styleField(errors.username && touched.username)} />
                            {errors.username && touched.username ? <div>{errors.username}</div> : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor='email' className='form-label' hidden>Ваш e-mail</label>
                            <Field type='email' name='email' placeholder='name@example.com' className={styleField(errors.email && touched.email)} />
                            {errors.email && touched.email ? <div className='invalid-feedback'>{errors.email}</div> : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor='password' className='form-label' hidden>Ваш пароль</label>
                            <Field type='password' name='password' placeholder='Пароль' className={styleField(errors.password && touched.password)} />
                            {errors.password && touched.password ? <div className='invalid-feedback'>{errors.password}</div> : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor='confirmPassword' className='form-label' hidden>Подтвердите пароль</label>
                            <Field type='password' name='confirmPassword' placeholder='Подтвердите пароль' className={styleField(errors.confirmPassword && touched.confirmPassword)} />
                            {errors.confirmPassword && touched.confirmPassword ? <div className='invalid-feedback'>{errors.confirmPassword}</div> : null}
                        </div>
                        <Button as='input' type='submit' value={'Зарегистрироваться'} />
                    </Form>
                )}
            </Formik>
        </Popap >
    )
}