import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchPlayersData } from '../api/fetchPlayersData';

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
    loading: false,
    error: null,
});

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayersData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPlayersData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchPlayersData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                adapter.setAll(state, payload)
            });
    },
});

export default playersSlice.reducer;