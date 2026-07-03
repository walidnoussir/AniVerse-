import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToLibrary,
  deleteFromLibrary,
  getLibrary,
} from "../../api/libraryApi";

export const fetchLibraries = createAsyncThunk(
  "/library/fetchLibraries",
  async () => {
    return await getLibrary();
  },
);

export const addToLibraryThunk = createAsyncThunk(
  "/library/addToLibrary",
  async (anime) => {
    return await addToLibrary(anime);
  },
);

export const deleteFromLibraryThunk = createAsyncThunk(
  "/library/deleteFromLibrary",
  async (id) => {
    return await deleteFromLibrary(id);
  },
);

const initialState = {
  library: [],
  isLoading: false,
  error: null,
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Library
      .addCase(fetchLibraries.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLibraries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library = action.payload;
      })
      .addCase(fetchLibraries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Add To Library
      .addCase(addToLibraryThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToLibraryThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library.push(action.payload);
      })
      .addCase(addToLibraryThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Delete From Library
      .addCase(deleteFromLibraryThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFromLibraryThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library = state.library.filter(
          (anime) => anime.id !== action.meta.arg,
        );
      })
      .addCase(deleteFromLibraryThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default librarySlice.reducer;
