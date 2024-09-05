import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginForm: {
        isShow: false,
    },
    registerForm: {
        isShow: false,
    },
    statusAuth: false,
    reatingOffcanvas: {
        isShow: false,
    },
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openLoginForm: (state) => {
            state.loginForm.isShow = true;
        },
        openRegisterForm: (state) => {
            state.registerForm.isShow = true;
        },
        closeLoginForm: (state) => {
            state.loginForm.isShow = false;
        },
        closeRegisterForm: (state) => {
            state.registerForm.isShow = false;
        },
        toggleStatusAuth: (state, actions) => {
            const flag = actions.payload;
            state.statusAuth = flag;
        },
        openReatingOffcanvas: (state) => {
            state.reatingOffcanvas.isShow = true;
        },
        closeReatingOffcanvas: (state) => {
            state.reatingOffcanvas.isShow = false;
        },
    },
})

export default uiSlice.reducer;
export const { openLoginForm,
    openRegisterForm,
    closeLoginForm,
    closeRegisterForm,
    toggleStatusAuth,
    openReatingOffcanvas,
    closeReatingOffcanvas } = uiSlice.actions;