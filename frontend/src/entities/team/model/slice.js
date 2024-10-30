import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchTeamsData } from "../api/fetchTeamsData";

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
    loading: false,
    error: null,
});

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeamsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTeamsData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchTeamsData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                adapter.setAll(state, payload)
            });
    },
})

export default teamsSlice.reducer;