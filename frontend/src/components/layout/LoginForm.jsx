import React from 'react';
import { Formik, Form } from 'formik';
import Popap from '../shared/Popap';

function LoginForm({ onClose }) {
    return (
        <Popap title={'Авторизация'} onClose={onClose}>
            <Formik>
                <Form>
                    <p>форма авторизации</p>
                </Form>
            </Formik>
        </Popap>
    )
}

export default LoginForm;