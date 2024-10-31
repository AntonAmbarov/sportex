import { createSelector } from "@reduxjs/toolkit";

const selectBase = (state) => state.leaques;

export const selectLeaques = createSelector(
    selectBase,
    ({ ids, entities }) => ({ ids, entities })
);

export const selectLeaquesError = createSelector(
    selectBase,
    (state) => state.error
)

export const selectLeaquesLoading = createSelector(
    selectBase,
    (state) => state.loading
)