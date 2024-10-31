import { createSelector } from '@reduxjs/toolkit';

const selectBase = (state) => state.scores;

export const selectScores = createSelector(
    selectBase,
    ({ ids, entities }) => ({ ids, entities })
);

export const selectScoresError = createSelector(selectBase, (state) => state.error);

export const selectScoresLoading = createSelector(selectBase, (state) => state.loading);