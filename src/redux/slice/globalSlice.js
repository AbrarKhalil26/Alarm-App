import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: "global",
    initialState: {
        darkMode: true,
        sidebar: false,
        expand: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        showSidebar: (state, action) => {
            state.sidebar = action.payload;
        },
        toggleExpand: (state) => {
            state.expand = !state.expand;
        }
    },
})

export const { toggleDarkMode, showSidebar, toggleExpand } = globalSlice.actions;
export default globalSlice.reducer;