import { configureStore } from '@reduxjs/toolkit';
import { musicApi } from '../services/music';
import searchReducer from './slices/searchSlice';
import playerReducer from './slices/playerSlice';
import playlistsReducer from './slices/playlistsSlice';
import authReducer from './slices/authSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    search: searchReducer,
    player: playerReducer,
    playlists: playlistsReducer,
    auth: authReducer,
    filter: filterReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
