import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const imgsAdapter = createEntityAdapter();

const imgsSlice = createSlice({
    name: 'imgs',
    initialState: imgsAdapter.getInitialState(),
    reducers: {
        setImgs: imgsAdapter.setAll(),
    },
});

export default imgsSlice.reducer;
export const { setImgs } = imgsSlice.actions;