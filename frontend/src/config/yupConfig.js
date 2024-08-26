import * as yup from 'yup';

const signupFormSchema = yup.object().shape({
    username: yup.string()
        .min(3, 'Минимум 3 символа')
        .max(25, 'Максимум 25 символов')
        .required('Логин обязателен'),
    email: yup.string()
        .email()
        .required('Email обязателен'),
    password: yup.string()
        .matches(
            /^[A-Za-z0-9]*$/,
            'Пароль может содержать только латинские буквы и цифры'
        )
        .matches(
            /^(?=.*[A-Z])/,
            'Пароль должен содержать минимум одну заглавную букву'
        )
        .matches(
            /^(?=.*\d)/,
            'Пароль должен содержать минимум одну цифру'
        )
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Пароль обязателен'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
        .required('Подтверждение пароля обязательно'),
})

const loginFormSchema = yup.object().shape({
    login: yup.string()
        .required('Логин обязателен'),
    password: yup.string()
        .required('Пароль обязателен'),
})

export { signupFormSchema, loginFormSchema };