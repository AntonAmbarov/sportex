import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./endpoints";

export const fetchRolesData = createAsyncThunk(
    'fetchRolesData',
    async (_, thunkAPI) => {
        try {
            const resp = await api.endpoints.getRoles.initiate();
            return resp.data || [];
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);