import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import getCookie from '../../utils/get-cookie';

export interface Props {
  token: string,
  isLogin: boolean
}

const initialState: Props = {
  token: '',
  isLogin: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.token = '';
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    }
  }
});

export const { setLogin, setToken, setLogout } = authSlice.actions;
export default authSlice.reducer;
