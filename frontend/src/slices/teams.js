import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import fetchInitAppData from "../config/fetchInitAppData";

const teamsAdapter = createEntityAdapter({
    loading: false,
    error: null,
});

const teamsSlice = createSlice({
    name: 'teams',
    initialState: teamsAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitAppData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchInitAppData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchInitAppData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                teamsAdapter.setAll(state, payload.getTeams);
            });
    },
})

export default teamsSlice.reducer;
export const { setTeams } = teamsSlice.actions;