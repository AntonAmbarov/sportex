import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchInitAppData } from 'shared/api/fetchInitAppData';

const avgScoresAdapter = createEntityAdapter();

const avgScoresSlice = createSlice({
    name: 'allAvgScores',
    initialState: avgScoresAdapter.getInitialState({
        isLoading: false,
        error: null,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitAppData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchInitAppData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(fetchInitAppData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                avgScoresAdapter.setAll(state, payload.getAllScoresAvg);
            })
    }
})

export default avgScoresSlice.reducer;