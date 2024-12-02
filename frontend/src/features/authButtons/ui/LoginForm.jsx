import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';

import { closeLoginForm } from 'shared/model/ui';
import { Popap } from 'shared/ui/popap';
import { InputField } from './InputField';
import { loginFormSchema } from '../model/yupConfig';
import { useLoginForm } from '../model/useLoginForm';

export function LoginForm() {

    const { initialValues, handleSubmit, isShow } = useLoginForm();
    const dispatch = useDispatch();

    return (
        <Popap title={'Авторизация'} onClose={() => dispatch(closeLoginForm())} show={isShow}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginFormSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <InputField
                            textLabel={'Ваш логин'}
                            name={'username'}
                            placeholder={'Логин'}
                            errors={errors}
                            touched={touched}
                        >
                        </InputField>
                        <InputField
                            textLabel={'Ваш пароль'}
                            name={'password'}
                            placeholder={'Пароль'}
                            errors={errors}
                            touched={touched}
                        >
                        </InputField>
                        <Button as='input' type='submit' value={'Войти'} />
                    </Form>
                )}
            </Formik>
        </Popap>
    )
}