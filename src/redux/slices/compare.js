import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
  name: "compare",
  initialState: {
    open: false,
    products: null,
  },

  reducers: {
    setCompare: (state, action) => {
      state.open = action.payload.open;
      state.products = action.payload.products;
    },
  },
});

export const { setCompare } = compareSlice.actions;
