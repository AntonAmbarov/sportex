import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: '',
    token: '',
}

const tokenSlice = createSlice({
    name: 'token',
    initialState: initialState,
    reducers: {
        setToken: (state, {userName, token}) => {
            state.userName = userName;
            state.token = token;
        },
     }
});

export default tokenSlice.reducer;
export const { setToken } = tokenSlice.actions;