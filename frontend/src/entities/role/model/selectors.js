import { createSelector } from '@reduxjs/toolkit';

const selectBase = (state) => state.roles;

export const selectRoles = createSelector(
    selectBase,
    ({ ids, entities }) => ({ ids, entities })
);

export const selectRolesError = createSelector(selectBase, (state) => state.error);

export const selectRolesLoading = createSelector(selectBase, (state) => state.loading);