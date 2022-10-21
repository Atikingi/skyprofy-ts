import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StateProps {
  showPlayer: boolean;
  isPlaying: boolean;
  currentTrackLink: string;
  id: number;
  ids: number[];
  isShuffle: boolean;
  isRepeat: boolean;
  page: number
}

const initialState: StateProps = {
  showPlayer: false,
  isPlaying: false,
  currentTrackLink: '',
  id: 8,
  ids: [],
  isShuffle: false,
  isRepeat: false,
  page: 1
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
      state.showPlayer = true;
    },
    getCurrentTrack: (state, action: PayloadAction<string>) => {
      state.currentTrackLink = action.payload;
    },
    pageUp: (state) => {
      state.page++;
    },
    clearPage: (state) => {
      state.page = 1;
    },
    getTrackId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    getTracksId: (state, action: PayloadAction<any>) => {
      state.ids.push(action.payload);
    },
    clearTracksId: (state) => {
      state.ids = [];
    },
    playNextTrack: (state, action: PayloadAction<number>) => {
      if (state.ids.indexOf(state.id) > state.ids.length) {
        state.id = state.ids[0];
      }
      state.id = state.ids[action.payload + 1];
    },
    playPrevTrack: (state, action: PayloadAction<number>) => {
      state.id = state.ids[action.payload - 1];
    },
    shuffleTracks: (state) => {
      state.isShuffle = true;
      for (let i = state.ids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.ids[i], state.ids[j]] = [state.ids[j], state.ids[i]];
      }
    },
    sortTracks: (state) => {
      state.isShuffle = false;
      state.ids = state.ids.sort((a, b) => a - b);
    },
    repeatTrack: (state) => {
      state.isRepeat = !state.isRepeat;
    }
  }
});

export const {
  play,
  getCurrentTrack,
  getTrackId,
  getTracksId,
  clearTracksId,
  playNextTrack,
  playPrevTrack,
  shuffleTracks,
  sortTracks,
  repeatTrack,
  pageUp,
  clearPage
} = playerSlice.actions;

export default playerSlice.reducer;
