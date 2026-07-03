import { createSlice } from "@reduxjs/toolkit";
import api from "../libs/axios";

export const getLibrary = async () => {
  const { data } = await api.get("/library");
  return data;
};

export const addToLibrary = async (anime) => {
  const { data } = await api.post("/library", anime);
  return data;
};

export const deleteFromLibrary = async (id) => {
  await api.delete(`/library/${id}`);
};

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

      .addCase(getLibrary.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getLibrary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library = action.payload;
      })
      .addCase(getLibrary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addToLibrary.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToLibrary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library.push(action.payload);
      })
      .addCase(addToLibrary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteFromLibrary.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFromLibrary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library = state.library.filter(
          (anime) => anime._id !== action.payload,
        );
      })
      .addCase(deleteFromLibrary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default librarySlice.reducer;
