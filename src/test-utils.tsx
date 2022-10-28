import React, { PropsWithChildren } from 'react';
import { cleanup, render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { AnyAction, EnhancedStore, Middleware, PreloadedState, Reducer, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type { AppStore, RootState } from './store/store';

import { setupStore } from './store/store';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { musicApi } from './services/music';
import searchReducer from './store/slices/searchSlice';
import playerReducer from './store/slices/playerSlice';
import playlistsReducer from './store/slices/playlistsSlice';
import authReducer from './store/slices/authSlice';
import filterReducer from './store/slices/filterSlice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper ({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function withStoreProvider (store: Store<any>) {
  return function Wrapper ({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
  };
}

export function setupApiStore<
  A extends {
    reducerPath: 'musicApi'
    reducer: Reducer<any, any>
    middleware: Middleware
    util: { resetApiState: () => any }
  },
  R extends Record<string, Reducer<any, any>> = Record<never, never>
  > (api: A, extraReducers?: R, withoutListeners?: boolean) {
  const getStore = () =>
    configureStore({
      reducer: {
        [musicApi.reducerPath]: musicApi.reducer,
        search: searchReducer,
        player: playerReducer,
        playlists: playlistsReducer,
        auth: authReducer,
        filter: filterReducer,
        ...extraReducers
      },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(
          api.middleware
        )
    });

  type StoreType = EnhancedStore<
  {
    api: ReturnType<A['reducer']>
  } & {
    [K in keyof R]: ReturnType<R[K]>
  },
  AnyAction,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  ReturnType<typeof getStore> extends EnhancedStore<any, any, infer M>
    ? M
    : never
  >

  const initialStore: StoreType = getStore() as unknown as StoreType;
  const refObj = {
    api,
    store: initialStore,
    wrapper: withStoreProvider(initialStore)
  };

  let cleanupListeners: () => void;

  beforeEach(() => {
    const store = getStore() as unknown as StoreType;
    refObj.store = store;
    refObj.wrapper = withStoreProvider(store);

    if (!withoutListeners) {
      cleanupListeners = setupListeners(store.dispatch);
    }
  });

  afterEach(() => {
    cleanup();

    if (!withoutListeners) {
      cleanupListeners();
    }

    refObj.store.dispatch(api.util.resetApiState());
  });

  return refObj;
}
