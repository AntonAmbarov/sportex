import { createSelector } from "@reduxjs/toolkit";

const selectBase = (state) => state.leagues;

export const selectLeagues = createSelector(
    selectBase,
    ({ ids, entities }) => ({ ids, entities })
);

export const selectLeaguesError = createSelector(
    selectBase,
    (state) => state.error
)

export const selectLeaguesLoading = createSelector(
    selectBase,
    (state) => state.loading
)