import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./endpoints";

export const fetchSportsData = createAsyncThunk(
    'fetchSportsData',
    async (_, thunkAPI) => {
        try {
            const resp = await api.endpoints.getSports.initiate();
            return resp.data || [];
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);