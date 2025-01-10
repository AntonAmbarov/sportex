import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchSportsData } from '../api/fetchSportsData';

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
    loading: false,
    error: null,
})

const sportsSlice = createSlice({
    name: 'sports',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSportsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSportsData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchSportsData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                adapter.setAll(state, payload);
            });
    },
});

export default sportsSlice.reducer;