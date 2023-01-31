import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/auth';
import { SetModeAction } from '../../types/root';

const initialState: AuthState = {
  user: null,
  token: null,
  mode: 'light',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLogin(state, action: PayloadAction<AuthState>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export default authSlice.reducer;

export const { setMode, setLogin, setLogout } = authSlice.actions;
