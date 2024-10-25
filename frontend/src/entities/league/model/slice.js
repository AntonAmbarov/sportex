import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchLeaguesData } from '../api/fetchLeaguesData'

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
    loading: false,
    error: null,
})

const leaguesSlice = createSlice({
    name: 'leagues',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLeaguesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLeaguesData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchLeaguesData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                leaguesAdapter.setAll(state, payload)
            });
    }
});

export default leaguesSlice.reducer;