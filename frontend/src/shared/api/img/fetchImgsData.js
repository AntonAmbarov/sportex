import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./endpoints";

export const fetchImgsData = createAsyncThunk(
    'fetchImgsData',
    async (_, thunkAPI) => {
        try {
            const resp = await api.endpoints.getImgs.initiate();
            return resp.data || [];
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);