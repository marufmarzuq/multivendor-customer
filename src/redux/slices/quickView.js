import { createSlice } from "@reduxjs/toolkit";

export const quickViewSlice = createSlice({
  name: "quickView",
  initialState: {
    open: false,
    product: null,
  },

  reducers: {
    setQuickView: (state, action) => {
      state.open = action.payload.open;
      state.product = action.payload.product;
    },
  },
});

export const { setQuickView } = quickViewSlice.actions;
