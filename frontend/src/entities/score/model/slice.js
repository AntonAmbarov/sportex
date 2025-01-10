import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchScoresData } from '../api/fetchScoresData';

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
    isLoading: false,
    error: null,
})

const avgScoresSlice = createSlice({
    name: 'allAvgScores',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchScoresData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchScoresData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(fetchScoresData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                adapter.setAll(state, payload);
            })
    }
})

export default avgScoresSlice.reducer;