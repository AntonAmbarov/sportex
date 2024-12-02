import { useSelector } from 'react-redux';
import { useRegisterMutation, useLoginMutation } from '../api/endpoints';
import { selectRegisterForm } from 'shared/model/ui';

export function useSignupForm() {
    const { isShow } = useSelector(selectRegisterForm);
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();

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

    return {
        initialValues,
        handleSubmit,
        isShow
    }
}