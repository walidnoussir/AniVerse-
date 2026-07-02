import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../features/animes/animeSlice";
import favoriteReducer from "../features/favorites/favotiteSlice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    favorites: favoriteReducer,
  },
});
