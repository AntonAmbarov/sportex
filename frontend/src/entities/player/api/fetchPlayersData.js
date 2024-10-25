import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./endpoints";

export const fetchPlayersData = createAsyncThunk(
    'fetchPlayersData',
    async (_, thunkAPI) => {
        try {
            const resp = await api.endpoints.getPlayers.initiate();
            return resp.data || [];
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);