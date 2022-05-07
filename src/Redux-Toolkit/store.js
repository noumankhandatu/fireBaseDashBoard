import { configureStore } from "@reduxjs/toolkit";
import ToggleReducer from "./buttonSlice";
export const store = configureStore({
  reducer: {
    movies: ToggleReducer,
  },
});
