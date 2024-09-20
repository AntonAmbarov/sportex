import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const roleAdapter = createEntityAdapter();

const roleSlice = createSlice({
    name: 'roles',
    initialState: roleAdapter.getInitialState(),
    reducers: {
        setRole: roleAdapter.setAll(),
    },
});

export default roleSlice.reducer;
export const { setRole } = roleSlice.actions;