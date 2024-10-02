import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const scoresForItemAdapter = createEntityAdapter();

const scoresForItemSlice = createSlice({
    name: 'scoresForItem',
    initialState: scoresForItemAdapter.getInitialState(),
    // extraReducers:
})