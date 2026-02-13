import { createSlice } from "@reduxjs/toolkit";
import {loadUserThunk, loginUserThunk} from "./authThunks"

// Types

type User = {
  id: string;
  fullName: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  isInitialized: boolean; 
};

// Initial State

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("authToken"),
  isAuthenticated: false,
  loading: false,
  error: null,
  isInitialized : false // Has auth check completed?
};

// Slice

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    logout(state) {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.isInitialized = true;
        localStorage.removeItem("authToken");
    },
    setInitialized(state) {
        state.isInitialized = true;
    },
    clearError(state) {
        state.error = null;
    },
  },
    extraReducers: (builder) => {
    builder

      // LOGIN
        .addCase(loginUserThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUserThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.isInitialized = true;
        })
        .addCase(loginUserThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

      // LOADUSER
        .addCase(loadUserThunk.pending, (state) => {
            state.loading = true;
            state.isInitialized = false;
        })
        .addCase(loadUserThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isInitialized = true;
        })
        .addCase(loadUserThunk.rejected, (state) => {
            state.loading = false;
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.isInitialized = true;
        })
    },
});

export const { logout, clearError, setInitialized } = authSlice.actions;
export default authSlice.reducer;