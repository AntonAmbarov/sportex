import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: null,
    token: null,
}

const tokenSlice = createSlice({
    name: 'token',
    initialState: initialState,
    reducers: {
        setToken: (state, actions) => {
            const { userName, token } = actions.payload;
            state.userName = userName;
            state.token = token;
        },
        removeToken: (state) => {
            state.userName = null;
            state.token = null;
        }
    }
});

export default tokenSlice.reducer;
export const { setToken, removeToken } = tokenSlice.actions;