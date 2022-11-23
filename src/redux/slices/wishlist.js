import { createSlice } from "@reduxjs/toolkit";

export const customerWishlistSlice = createSlice({
  name: "auth",
  initialState: {
    count: false,
    products: null,
  },

  reducers: {
    setCustomerWishlist: (state, action) => {
      state.count = action.payload.count;
      state.products = action.payload.products;
    },
  },
});

export const { setCustomerWishlist } = customerWishlistSlice.actions;
