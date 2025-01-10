import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./endpoints";

export const fetchSportsData = createAsyncThunk(
    'fetchSportsData',
    async (_, thunkAPI) => {
        try {
            const resp = await thunkAPI.dispatch(api.endpoints.getSports.initiate());
            const err = resp.err;

            if (err) {
                return thunkAPI.rejectWithValue(err)
            }
            return resp.data || [];
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);