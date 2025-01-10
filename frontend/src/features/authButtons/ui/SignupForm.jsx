import React from 'react';
import { useDispatch } from 'react-redux';

import { closeRegisterForm } from 'shared/model/ui';
import { signupFormSchema } from '../model/yupConfig';
import { Popap } from 'shared/ui/popap';
import { useSignupForm } from '../model/useSignupForm';
import { useTranslation } from 'react-i18next';
import { CustomForm } from './CustomForm';

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

export function SignupForm() {
    const { initialValues, handleSubmit, isShow } = useSignupForm();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    if (!isShow) return null;

    const formInit = {
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: signupFormSchema,
    }

    return (
        <Popap
            title={t('ui.signupPopap')}
            onClose={() => dispatch(closeRegisterForm())}
            show={isShow}
        >
            <CustomForm
                formInit={formInit}
                inputs={inputs}
                submitButtonText={t('ui.signupBtn')}
            />
        </Popap >
    )
}