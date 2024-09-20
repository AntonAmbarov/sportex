import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const playersAdapter = createEntityAdapter();

const playersSlice = createSlice({
    name: 'players',
    initialState: playersAdapter.getInitialState(),
    reducers: {
        setPlayers: playersAdapter.setAll(),
    },
});

export default playersSlice.reducer;
export const { setPlayers } = playersSlice.actions;