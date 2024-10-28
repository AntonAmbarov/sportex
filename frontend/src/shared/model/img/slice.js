import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchImgsData } from '../../api/img';

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
            .addCase(fetchImgsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchImgsData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchImgsData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                imgsAdapter.setAll(state, payload.getImgs);
            })
    }
});

export default imgsSlice.reducer;