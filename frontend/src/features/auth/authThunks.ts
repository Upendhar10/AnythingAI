import {createAsyncThunk}  from "@reduxjs/toolkit"
import { authService } from "./authService";

export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await authService.login(payload);

      const { user, token } = response.data;

      localStorage.setItem("authToken", token);

      return { user, token };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUserThunk = createAsyncThunk(
  "auth/register",
  async (
    payload: { fullName: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const user = await authService.register(payload);
      return user;

    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadUserThunk = createAsyncThunk(
  "auth/loadUser",
  async (_, thunkAPI) => {
    try {
      const response = await authService.getMe();
      const currentUser = response.data.user;
      return currentUser;
    } catch (error: any) {
      localStorage.removeItem("authToken");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);