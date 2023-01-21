import { configureStore } from "@reduxjs/toolkit";
import sermonReducer from "./slices/sermonSlice";
import heroReducer from "./slices/heroSlice";
import audioReducer from "./slices/audio-slice";
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: { audio: audioReducer, sermon: sermonReducer, hero: heroReducer, user: userReducer },
});

export default store;
