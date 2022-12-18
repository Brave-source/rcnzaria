import { createSlice } from "@reduxjs/toolkit";

const initialAudioState = {
  audioRef: null,
  audioURl: "",
};

const audioSlice = createSlice({
  name: "audio",
  initialState: initialAudioState,
  reducers: {
    setAudioRef(state, action) {
      state.audioRef = action.payload;
    },
    setAudioURL(state, action) {
      state.audioURl = action.payload;
    },
  },
});

export const audioReducer = audioSlice.reducer;
export const audioActions = audioSlice.actions;
export const audioRef = (state) => state.audio.audioRef;
export const audioURl = (state) => state.audio.audioURl;

export default audioReducer;
