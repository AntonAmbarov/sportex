import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./endpoints";

export const fetchTeamsData = createAsyncThunk(
    'fetchTeamsData',
    async (_, thunkAPI) => {
        try {
            const resp = await thunkAPI.dispatch(api.endpoints.getTeams.initiate());
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