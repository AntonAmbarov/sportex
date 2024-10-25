import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchInitAppData } from 'app/stores/fetchInitAppData';

const imgsAdapter = createEntityAdapter();

const imgsSlice = createSlice({
    name: 'imgs',
    initialState: imgsAdapter.getInitialState({
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
            .addCase(fetchInitAppData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchInitAppData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                imgsAdapter.setAll(state, payload.getImgs);
            })
    }
});

export default imgsSlice.reducer;