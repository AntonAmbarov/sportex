import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./endpoints";

export const fetchScoresData = createAsyncThunk(
    'fetchScoresData',
    async (_, thunkAPI) => {
        try {
            const resp = await api.endpoints.getAllScoresAvg.initiate();
            return resp.data || [];
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);