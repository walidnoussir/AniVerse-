import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.jikan.moe/v4";

// get the top anime
export const getTopAnime = createAsyncThunk(
  "anime/topAnime",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/top/anime`);

      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

// get the seasonal anime
export const getSeasonalAnime = createAsyncThunk(
  "anime/seasonalAnime",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/seasons/now`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

// get all anime
export const getAnime = createAsyncThunk(
  "/anime/",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/anime`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

const initialState = {
  topAnime: [],
  seasonalAnime: [],
  allAnimes: [],
  isLoading: false,
  error: null,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getTopAnime.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTopAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topAnime = action.payload.data;
      })
      .addCase(getTopAnime.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getSeasonalAnime.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSeasonalAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.seasonalAnime = action.payload.data;
      })
      .addCase(getSeasonalAnime.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAnime.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allAnimes = action.payload.data;
      })
      .addCase(getAnime.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default animeSlice.reducer;
