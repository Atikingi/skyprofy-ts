import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Props {
  id: string,
  name: string
}

const initialState: Props = {
  id: '1',
  name: ''
};

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    getPlaylistId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    getPlaylistName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
});

export const { getPlaylistId, getPlaylistName } = playlistsSlice.actions;
export default playlistsSlice.reducer;
