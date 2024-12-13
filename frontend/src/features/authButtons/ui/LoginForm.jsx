import React from 'react';
import { useDispatch } from 'react-redux';
// import { Formik, Form } from 'formik';

import { closeLoginForm } from 'shared/model/ui';
import { Popap } from 'shared/ui/popap';
// import { InputField } from './InputField';
import { loginFormSchema } from '../model/yupConfig';
import { useLoginForm } from '../model/useLoginForm';
import { CustomForm } from './CustomForm';
import { useTranslation } from 'react-i18next';

const inputs = [
    {
        textLabel: 'Ваш логин',
        name: 'username',
        placeholder: 'Логин',
        type: 'text'
    },
    {
        textLabel: 'Ваш пароль',
        name: 'password',
        placeholder: 'Пароль',
        type: 'password'
    }
]

export function LoginForm() {

    const { initialValues, handleSubmit, isShow } = useLoginForm();
    const dispatch = useDispatch();
    const { t } = useTranslation()

    if (!isShow) return null;

    const formInit = {
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: loginFormSchema
    }

    return (
        <Popap
            title={t('ul.loginPopap')}
            onClose={() => dispatch(closeLoginForm())}
            show={isShow}
        >
            <CustomForm
                formInit={formInit}
                inputs={inputs}
                submitButtonText={t('ui.loginBtn')}
            />
        </Popap>
    )
}