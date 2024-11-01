import { createSelector } from '@reduxjs/toolkit';

const selectBase = (state) => state.avgScores;

export const selectAvgScores = createSelector(
    selectBase,
    ({ ids, entities }) => ({ ids, entities })
);

export const selectAvgScoresError = createSelector(selectBase, (state) => state.error);

export const selectAvgScoresLoading = createSelector(selectBase, (state) => state.loading);

export const selectAvgScoreById = createSelector(
    [selectAvgScores, (_, id) => id],
    ({ entities }, id) => entities[id]?.overall_rating
);