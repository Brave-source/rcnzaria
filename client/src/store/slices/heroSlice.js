import { createSlice } from "@reduxjs/toolkit";

export const heroSlice = createSlice({
  name: "hero",
  initialState: {
    heros: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getHeroStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getHeroSuccess: (state, action) => {
      state.isFetching = false;
      state.heros = action.payload;
    },
    getHeroFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteHeroStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteHeroSuccess: (state, action) => {
      state.isFetching = false;
      state.heros.splice(
        state.heros.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteHeroFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addHeroStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addHeroSuccess: (state, action) => {
      state.isFetching = false;
      state.heros.push(action.payload);
    },
    addHeroFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getHeroStart,
  getHeroSuccess,
  getHeroFailure,
  deleteHeroStart,
  deleteHeroSuccess,
  deleteHeroFailure,
  addHeroStart,
  addHeroSuccess,
  addHeroFailure,
} = heroSlice.actions;

export default heroSlice.reducer;
