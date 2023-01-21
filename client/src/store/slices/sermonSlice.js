import { createSlice } from "@reduxjs/toolkit";

export const sermonSlice = createSlice({
  name: "sermon",
  initialState: {
    sermons: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getSermonStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSermonSuccess: (state, action) => {
      state.isFetching = false;
      state.sermons = action.payload;
    },
    getSermonFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteSermonStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteSermonSuccess: (state, action) => {
      state.isFetching = false;
      state.sermons.splice(
        state.sermons.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteSermonFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addSermonStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addSermonSuccess: (state, action) => {
      state.isFetching = false;
      state.sermons.push(action.payload);
    },
    addSermonFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getSermonStart,
  getSermonSuccess,
  getSermonFailure,
  deleteSermonStart,
  deleteSermonSuccess,
  deleteSermonFailure,
  addSermonStart,
  addSermonSuccess,
  addSermonFailure,
} = sermonSlice.actions;

export default sermonSlice.reducer;
