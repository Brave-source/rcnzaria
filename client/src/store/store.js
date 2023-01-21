import { configureStore } from "@reduxjs/toolkit";
import sermonReducer from "./slices/sermonSlice";
import audioReducer from "./slices/audio-slice";

const store = configureStore({
  reducer: { audio: audioReducer, sermon: sermonReducer },
});

export default store;
