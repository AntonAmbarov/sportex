import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import fetchInitAppData from "../config/fetchInitAppData";

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
            .addCase(fetchInitAppData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchInitAppData.rejected, (state, { payload }) => {
                state.loading = true;
                state.error = payload;
            })
            .addCase(fetchInitAppData.fulfilled, (state, { payload }) => {
                state.loading = true;
                state.error = null;
                roleAdapter.setAll(state, payload.getRoles);
            });
    },
});

export default roleSlice.reducer;
export const { setRoles } = roleSlice.actions;