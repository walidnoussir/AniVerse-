import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  addFavorite,
  deleteFavorite,
  getFavorites,
} from "../../api/favoritesApi";

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async () => {
    return await getFavorites();
  },
);

export const addFavoriteThunk = createAsyncThunk(
  "favorites/addFavorite",
  async (anime) => {
    return await addFavorite(anime);
  },
);

export const removeFavoriteThunk = createAsyncThunk(
  "favorites/removeFavorite",
  async (id) => {
    await deleteFavorite(id);
    return id;
  },
);

const initialState = {
  favorites: [],
  isLoading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
      })

      .addCase(addFavoriteThunk.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })

      .addCase(removeFavoriteThunk.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (anime) => anime.id !== action.payload,
        );
      });
  },
});

export default favoriteSlice.reducer;
