import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchInitAppData } from 'shared/api/fetchInitAppData';

const playersAdapter = createEntityAdapter({
    loading: false,
    error: null,
});

const playersSlice = createSlice({
    name: 'players',
    initialState: playersAdapter.getInitialState(),
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
                playersAdapter.setAll(state, payload.getPlayers)
            });
    },
});

export default playersSlice.reducer;
export const { setPlayers } = playersSlice.actions;