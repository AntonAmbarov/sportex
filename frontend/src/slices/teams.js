import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const teamsAdapter = createEntityAdapter();

const teamsSlice = createSlice({
    name: 'teams',
    initialState: teamsAdapter.getInitialState(),
    reducers: {
        setTeams: teamsAdapter.setAll(),
    },
})

export default teamsSlice.reducer;
export const { setTeams } = teamsSlice.actions;