import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Props {
  isAddFavorite: boolean,
  isDeleteFavorite: boolean
}

const initialState: Props = {
  isAddFavorite: false,
  isDeleteFavorite: false
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addTrack: (state) => {
      state.isAddFavorite = !state.isAddFavorite;
    },
    deleteTrack: (state) => {
      state.isDeleteFavorite = !state.isDeleteFavorite;
    }
  }
});

export const { addTrack, deleteTrack } = favoriteSlice.actions;
export default favoriteSlice.reducer;
