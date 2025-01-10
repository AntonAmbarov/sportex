import { createSelector } from '@reduxjs/toolkit';

const selectBase = (state) => state.players;

export const selectPlayers = createSelector(
    selectBase,
    ({ ids, entities }) => ({ ids, entities })
);

export const selectPlayersError = createSelector(selectBase, (state) => state.error);

export const selectPlayersLoading = createSelector(selectBase, (state) => state.loading);