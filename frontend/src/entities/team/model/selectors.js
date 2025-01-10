import { createSelector } from '@reduxjs/toolkit';

const selectBase = (state) => state.teams;

export const selectTeams = createSelector(
    selectBase,
    ({ ids, entities }) => ({ ids, entities })
);

export const selectTeamsError = createSelector(selectBase, (state) => state.error);

export const selectTeamsLoading = createSelector(selectBase, (state) => state.loading);