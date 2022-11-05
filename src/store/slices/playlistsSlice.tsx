import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Props {
  id: string,
  name: string,
  isShow: boolean
}

const initialState: Props = {
  id: '1',
  name: '',
  isShow: false
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
    },
    showMenu: (state) => {
      state.isShow = !state.isShow;
    }
  }
});

export const { getPlaylistId, getPlaylistName, showMenu } = playlistsSlice.actions;
export default playlistsSlice.reducer;
