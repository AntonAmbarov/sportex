import { createSelector } from '@reduxjs/toolkit';

const selectBase = (state) => state.ui;

export const selectLoginForm = createSelector(
    selectBase,
    (state) => state.loginForm
);

export const selectRegisterForm = createSelector(
    selectBase,
    (state) => state.registerForm
);

export const selectStatusAuth = createSelector(
    selectBase,
    (state) => state.statusAuth
);

export const selectReatingOffcanvas = createSelector(
    selectBase,
    (state) => state.reatingOffcanvas
);