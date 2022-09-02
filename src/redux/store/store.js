import { configureStore } from "@reduxjs/toolkit";

import {
  productSlice,
  singleProductSlice,
} from "../slices/seller/products";

export const store = configureStore({
  reducer: {
    productReducer: productSlice.reducer,
    singleProductReducer: singleProductSlice.reducer,
  },
});
