import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../features/animes/animeSlice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
});
