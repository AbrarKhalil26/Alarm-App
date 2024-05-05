import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slice/globalSlice";
import { alarmSlice } from "./slice/alarmSlice";
import { timerSlice } from "./slice/timerSlice";

// Middleware to save state to localStorage
const saveToLocalStorage = store => next => action => {
  const result = next(action);
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  return result;
};

// Load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined;
  }
};

const rootReducer = combineReducers({
  global: globalSlice,
  alarm: alarmSlice.reducer,
  timer: timerSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saveToLocalStorage),
  preloadedState: loadFromLocalStorage() // Load state from localStorage
});

export default store;
