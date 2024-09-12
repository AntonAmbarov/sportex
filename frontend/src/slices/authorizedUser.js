import { createSlice } from "@reduxjs/toolkit";
import { paths } from "../config/apiConfig";

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
            // console.log('profile', profile) //log
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

export default authorizedUserSlice.reducer;
export const { setProfil, removeProfil } = authorizedUserSlice.actions;