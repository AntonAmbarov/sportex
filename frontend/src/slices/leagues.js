import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchInitAppData } from 'shared/api/fetchInitAppData';

const leaguesAdapter = createEntityAdapter();

const leaguesSlice = createSlice({
    name: 'leagues',
    initialState: leaguesAdapter.getInitialState({
        loading: false,
        error: null,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitAppData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchInitAppData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchInitAppData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                leaguesAdapter.setAll(state, payload.getLeagues)
            });
    }
});

export default leaguesSlice.reducer;
export const { setLeagues } = leaguesSlice.actions;