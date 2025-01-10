import { createSelector } from '@reduxjs/toolkit';

export const selectCurrentUser = createSelector(
    (state) => state.authorizedUser,
    (authorizedUser) => authorizedUser
);