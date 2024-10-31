import { createSelector } from '@reduxjs/toolkit';

const selectBase = (state) => state.sports;

export const selectSports = createSelector(
    selectBase,
    ({ ids, entities }) => ({ ids, entities })
);

export const selectSportsError = createSelector(selectBase, (state) => state.error);

export const selectSportsLoading = createSelector(selectBase, (state) => state.loading);