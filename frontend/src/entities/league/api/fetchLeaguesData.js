import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./endpoints";

export const fetchLeaguesData = createAsyncThunk(
    'fetchLeaguesData',
    async (_, thunkAPI) => {
        try {
            const resp = await thunkAPI.dispatch(api.endpoints.getLeagues.initiate());

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