import React from 'react';
import { Formik, Form } from 'formik';
import Popap from '../shared/Popap';

function SignupForm({ onClose }) {
    return (
        <Popap title={'Регистрация'} onClose={onClose}>
            <Formik>
                <Form>
                    <p>форма регистрации</p>
                </Form>
            </Formik>
        </Popap>
    )
}

export default SignupForm;