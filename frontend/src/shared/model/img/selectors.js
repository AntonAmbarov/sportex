import { createSelector } from '@reduxjs/toolkit';

const selectBase = (state) => state.imgs;

export const selectImgs = createSelector(
    selectBase,
    ({ ids, entities }) => ({ ids, entities })
);

export const selectImgsError = createSelector(selectBase, (state) => state.error);

export const selectImgsLoading = createSelector(selectBase, (state) => state.loading);