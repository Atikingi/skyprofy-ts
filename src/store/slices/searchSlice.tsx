import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  searchValue: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  }
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
