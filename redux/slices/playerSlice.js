import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, { payload }) => {
      state.activeSong = payload.song;
      if (payload?.data?.tracks?.hits) {
        state.currentSongs = payload?.data?.tracks?.hits;
      } else if (payload?.data?.properties) {
        state.currentSongs = payload?.data?.tracks;
      } else {
        state.currentSongs = payload?.data;
      }
      state.currentIndex = payload.i;
      state.isActive = true;
    },
    nextSong: (state, { payload }) => {
      if (state.currentSongs[payload]?.track) {
        state.activeSong = state.currentSongs[payload].track;
      } else {
        state.activeSong = state.currentSongs[payload];
      }
      state.currentIndex = payload;
      state.isActive = true;
    },
    prevSong: (state, { payload }) => {
      if (state.currentSongs[payload]?.track) {
        state.activeSong = state.currentSongs[payload].track;
      } else {
        state.activeSong = state.currentSongs[payload];
      }
      state.currentIndex = payload;
      state.isActive = true;
    },
    playPause: (state, { payload }) => {
      state.isPlaying = payload;
    },
    selectGenreListId: (state, { payload }) => {
      state.genreListId = payload;
    },
  },
});


export const {setActiveSong, playPause, nextSong, prevSong, selectGenreListId} = playerSlice.actions;

export default playerSlice.reducer;