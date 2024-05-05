import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
    name: "timer",
    initialState: {
        timers: [],
    },
    reducers: {
        addTimer: (state, action) => {
            state.timers.push(action.payload);
        },
        editTimer: (state, action) => {
            state.timers = state.timers.map((timer) => {
                if (timer.id === action.payload.id) {
                    return {
                        ...timer,
                        ...action.payload,
                    };
                }
                return timer;
            });
        },
        removeTimer: (state, action) => {
            state.timers = state.timers.filter((timer, index) => index !== action.payload);
        },
    },
})

export const { addTimer, editTimer, removeTimer } = timerSlice.actions;
export default timerSlice.reducer;
