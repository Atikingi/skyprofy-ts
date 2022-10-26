import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Props {
  filteredByYear: boolean,
  filteredByGenre: boolean,
  filteredByAuthor: boolean,
  filterYearValue: string,
  filterGenresValue: string[]
  filterAuthorsValue: string[]
  genres: string[],
  authors: string[],
}

const initialState: Props = {
  filteredByYear: false,
  filteredByGenre: false,
  filteredByAuthor: false,
  filterYearValue: 'default',
  filterGenresValue: [],
  filterAuthorsValue: [],
  genres: [],
  authors: []
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getGenres: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.genres = state.genres.concat(action.payload);
      }
    },
    getAuthors: (state, action: PayloadAction<string>) => {
      state.authors = state.authors.concat(action.payload);
    },
    filterByYear: (state, action: PayloadAction<string>) => {
      state.filterYearValue = action.payload;
      state.filteredByYear = action.payload !== 'default';
    },
    addFilterByGenre: (state, action: PayloadAction<string>) => {
      state.filterGenresValue.push(action.payload);
      state.filteredByGenre = true;
    },
    deleteGenres: (state, action: PayloadAction<string>) => {
      state.filterGenresValue = state.filterGenresValue.filter((genre) => genre !== action.payload);
      if (!state.filterGenresValue.length) {
        state.filteredByGenre = false;
      }
    },
    addFilterByAuthor: (state, action: PayloadAction<string>) => {
      state.filterAuthorsValue.push(action.payload);
      state.filteredByAuthor = true;
    },
    deleteAuthors: (state, action: PayloadAction<string>) => {
      state.filterAuthorsValue = state.filterAuthorsValue.filter((author) => author !== action.payload);
      if (!state.filterAuthorsValue.length) {
        state.filteredByAuthor = false;
      }
    }
  }
});

export const { filterByYear, getGenres, getAuthors, deleteGenres, addFilterByGenre, addFilterByAuthor, deleteAuthors } = filterSlice.actions;
export default filterSlice.reducer;
