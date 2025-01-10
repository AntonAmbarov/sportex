import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchRolesData } from '../api/fetchRolesData';

const roleAdapter = createEntityAdapter({
    loading: false,
    error: null,
});

const roleSlice = createSlice({
    name: 'roles',
    initialState: roleAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRolesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRolesData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchRolesData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                roleAdapter.setAll(state, payload);
            });
    },
});

export default roleSlice.reducer;