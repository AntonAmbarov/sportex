import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const sportsAdapter = createEntityAdapter();

const sportsSlice = createSlice({
    name: 'sports',
    initialState: sportsAdapter.getInitialState(),
    reducers: {
        setSports: sportsAdapter.setAll(),
    },
});

export default sportsSlice.reducer;
export const { setSports } = sportsSlice.actions;