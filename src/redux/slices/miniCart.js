import { createSlice } from "@reduxjs/toolkit";

export const miniCartSlice = createSlice({
  name: "miniCart",
  initialState: {
    open: false,
  },

  reducers: {
    setMiniCart: (state, action) => {
      state.open = action.payload.open;
    },
  },
});

export const { setMiniCart } = miniCartSlice.actions;
