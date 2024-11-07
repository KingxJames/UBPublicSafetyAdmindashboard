import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  token: string | null;
  username: string;
  name: string;
  loading: boolean;
  error: string | null;
  user: any;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  username: "",
  name: "",
  loading: false,
  error: null,
  user: null,
  isAuthenticated: false,
};

// Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<AuthState>) {
      return { ...state, ...action.payload };
    },
    logout(state) {
      return { ...state, token: null };
    },
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthData, logout, setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;

export const selectName = (state: RootState) => state.auth.name;
export const selectUsername = (state: RootState) => state.auth.username;
