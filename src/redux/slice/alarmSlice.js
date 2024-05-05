import { createSlice } from "@reduxjs/toolkit";

export const alarmSlice = createSlice({
    name: "alarms",
    initialState: {
        alarms: [],
    },
    reducers: {
        addAlarm: (state, action) => {
            state.alarms.push(action.payload);
        },
        editAlarm: (state, action) => {
            state.alarms = state.alarms.map((alarm) => {
                console.log(action.payload)
                if (alarm.id === action.payload.id) {
                    return {
                        ...alarm,
                        ...action.payload,
                    };
                }
                return alarm;
            });
        },
        removeAlarm: (state, action) => {
            state.alarms = state.alarms.filter((alarm) => alarm.id !== action.payload);
        },
    },
})

export const { addAlarm, editAlarm, removeAlarm } = alarmSlice.actions;
export default alarmSlice.reducer;