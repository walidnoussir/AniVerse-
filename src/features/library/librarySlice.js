import { createAsyncThunk } from "@reduxjs/toolkit";
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
