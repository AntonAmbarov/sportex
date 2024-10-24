import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchInitAppData } from 'shared/api/fetchInitAppData';

const sportsAdapter = createEntityAdapter({
    loading: false,
    error: null,
});

const sportsSlice = createSlice({
    name: 'sports',
    initialState: sportsAdapter.getInitialState(),
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
                sportsAdapter.setAll(state, payload.getSports);
            });
    },
});

export default sportsSlice.reducer;
export const { setSports } = sportsSlice.actions;