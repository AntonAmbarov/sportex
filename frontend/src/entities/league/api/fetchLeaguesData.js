import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./endpoints";

export const fetchLeaguesData = createAsyncThunk(
    'fetchLeaguesData',
    async (_, thunkAPI) => {
        try {
            const resp = await api.endpoints.getLeagues.initiate();
            return resp.data || [];
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);