import { configureStore } from "@reduxjs/toolkit";

import {
  productSlice,
  singleProductSlice,
} from "../slices/seller/products";

import {
  orderSlice,
} from "../slices/seller/orders";

export const store = configureStore({
  reducer: {
    productSlice: productSlice.reducer,
    singleProductReducer: singleProductSlice.reducer,
    orderSlice: orderSlice.reducer,
  },
});
