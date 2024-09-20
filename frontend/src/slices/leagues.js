import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const leaguesAdapter = createEntityAdapter();

const leaguesSlice = createSlice({
    name: 'leagues',
    initialState: leaguesAdapter.getInitialState(),
    reducers: {
        setLeagues: leaguesAdapter.setAll(),
    },
});

export default leaguesSlice;
export const { setLeagues } = leaguesSlice.actions;