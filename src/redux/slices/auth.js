import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedin: false,
    user: null,
  },

  reducers: {
    setAuth: (state, action) => {
      state.isLoggedin = action.payload.isLoggedin;
      state.user = action.payload.user;
    },
  },
});

export const { setAuth } = authSlice.actions;
