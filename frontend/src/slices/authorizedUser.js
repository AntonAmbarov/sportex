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
    name: 'token',
    initialState: initialState,
    reducers: {
        setProfil: (state, actions) => {
            const { profile } = actions.payload;

            return {
                ...state,
                ...profile,
                avatar: paths.avatar(profile.userName)
            }
        },
        removeProfil: (state) => {
            return {
                ...state,
                ...initialState
            }
        }
    }
});

export default authorizedUserSlice.reducer;
export const { setProfil, removeProfil } = authorizedUserSlice.actions;