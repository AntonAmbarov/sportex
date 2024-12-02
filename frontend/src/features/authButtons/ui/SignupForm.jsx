import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { closeRegisterForm } from 'shared/model/ui';
import { signupFormSchema } from '../model/yupConfig';
import { Popap } from 'shared/ui/popap';
import { useSignupForm } from '../model/useSignupForm';
import { InputField } from './InputField';

export function SignupForm() {

    const dispatch = useDispatch();
    const { initialValues, handleSubmit, isShow } = useSignupForm();

    const inputs = [
        {
            textLabel: 'Ваш логин',
            name: 'username',
            placeholder: 'Логин',
            type: 'text'
        },
        {
            textLabel: 'Ваш e-mail',
            name: 'email',
            placeholder: 'name@example.com',
            type: 'email'
        },
        {
            textLabel: 'Ваш пароль',
            name: 'password',
            placeholder: 'Пароль',
            type: 'password'
        },
        {
            textLabel: 'Подтвердите пароль',
            name: 'confirmPassword',
            placeholder: 'Подтвердите пароль',
            type: 'password'
        }
    ]

    if (!isShow) return null;

    return (
        <Popap title='Регистрация' onClose={() => dispatch(closeRegisterForm())} show={isShow}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={signupFormSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        {inputs.map((props) =>
                            <InputField
                                key={props.name}
                                {...props}
                                errors={errors}
                                touched={touched}
                            />
                        )}
                        <Button as='input' type='submit' value={'Зарегистрироваться'} />
                    </Form>
                )}
            </Formik>
        </Popap >
    )
}