import { createSlice } from '@reduxjs/toolkit';
import { paths } from 'shared/api/apiConfig';

const initialState = {
    userDisplayName: null,
    userEmail: null,
    userId: null,
    userName: null,
    avatar: null,
}

const authorizedUserSlice = createSlice({
    name: 'authorizedUser',
    initialState: initialState,
    reducers: {
        setProfil: (state, actions) => {
            const { profile } = actions.payload;
            state.userDisplayName = profile.userDisplayName;
            state.userEmail = profile.userEmail;
            state.userId = profile.userId;
            state.userName = profile.userName;
            state.avatar = paths.avatar(profile.userName);
        },
        removeProfil: (state) => {
            Object.assign(state, initialState);
        }
    }
});

export const { authorizedUser } = authorizedUserSlice.reducer;
export const { setProfil, removeProfil } = authorizedUserSlice.actions;