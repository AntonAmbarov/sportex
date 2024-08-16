import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const menuSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setActiveMenu: (state, action) => {
            state.activeMenu = action.payload;
        }
    }
})

export default menuSlice.reducer;
export const { setActiveMenu } = menuSlice.actions; 