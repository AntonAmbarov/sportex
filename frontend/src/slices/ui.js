import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginForm: {
        show: false,
    },
    registerForm: {
        show: false,
    },
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openLoginForm: (state) => {
            state.loginForm.show = true;
        },
        openRegisterForm: (state) => {
            state.registerForm.show = true;
        },
        closeLoginForm: (state) => {
            state.loginForm.show = false;
        },
        closeRegisterForm: (state) => {
            state.registerForm.show = false;
        }
    }
})

export default uiSlice.reducer;
export const { openLoginForm, openRegisterForm, closeLoginForm, closeRegisterForm } = uiSlice.actions;