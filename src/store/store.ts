import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { musicApi } from '../services/music';
import searchReducer from './slices/searchSlice';
import playerReducer from './slices/playerSlice';
import playlistsReducer from './slices/playlistsSlice';
import authReducer from './slices/authSlice';
import filterReducer from './slices/filterSlice';

const rootReducer = combineReducers({
  [musicApi.reducerPath]: musicApi.reducer,
  search: searchReducer,
  player: playerReducer,
  playlists: playlistsReducer,
  auth: authReducer,
  filter: filterReducer
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware)
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(musicApi.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
