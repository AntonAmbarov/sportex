import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusAuth } from 'shared/model/ui';
import { setProfil } from 'shared/model/currentUser';
import { useLoginMutation } from '../api/endpoints';
import { selectLoginForm } from 'shared/model/ui';

export function useLoginForm() {
    const { isShow } = useSelector(selectLoginForm);
    const dispatch = useDispatch();
    const [login] = useLoginMutation();

    const initialValues = {
        username: '',
        password: '',
    }

    const handleSubmit = async (values) => {
        try {
            const { data: userData } = await login(values).unwrap();

            if (userData) {
                const profile = {
                    userDisplayName: userData.displayName,
                    userEmail: userData.email,
                    userId: userData.id,
                    userName: userData.nicename,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                };

                localStorage.setItem('currentUser', JSON.stringify(profile));
                localStorage.setItem('token', userData.token);

                dispatch(setProfil({ profile: profile }));
                dispatch(toggleStatusAuth(true));
            }
        }
        catch (error) {
            alert('Авторизация не удалась');
            console.error(error);
        }
    }

    return {
        initialValues,
        handleSubmit,
        isShow
    }
}