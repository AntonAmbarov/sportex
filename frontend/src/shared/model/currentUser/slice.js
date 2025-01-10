import { createSlice } from '@reduxjs/toolkit';
import { paths } from '../../api/config';

const initialState = {
    userDisplayName: null,
    userEmail: null,
    userId: null,
    userName: null,
    avatar: null,
    firstName: null,
    lastName: null,
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: initialState,
    reducers: {
        setProfil: (state, actions) => {
            const { profile } = actions.payload;
            Object.assign(state, {
                userDisplayName: profile.userDisplayName,
                userEmail: profile.userEmail,
                userId: profile.userId,
                userName: profile.userName,
                avatar: paths.avatar(profile.userName),
                firstName: profile.firstName,
                lastName: profile.lastName
            });
        },
        removeProfil: (state) => {
            Object.assign(state, initialState);
        }
    }
});

export default currentUserSlice.reducer;
export const { setProfil, removeProfil } = currentUserSlice.actions;