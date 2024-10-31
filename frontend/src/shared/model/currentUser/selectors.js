import { createSelector } from '@reduxjs/toolkit';

export const selectCurrentUser = createSelector(
    (state) => state.currentUser,
    (state) => state
);