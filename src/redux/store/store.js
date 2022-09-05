import { configureStore } from "@reduxjs/toolkit";

import {
  productSlice,
  singleProductSlice,
  wishlistSlice,
  reviewSlice,
} from "../slices/seller/products";

import {
  orderSlice,
} from "../slices/seller/orders";

import {
  sentRefundsSlice,
} from "../slices/seller/refunds";


export const store = configureStore({
  reducer: {
    productSlice        : productSlice.reducer,
    singleProductReducer: singleProductSlice.reducer,
    orderSlice          : orderSlice.reducer,
    sentRefundsSlice    : sentRefundsSlice.reducer,
    wishlistSlice       : wishlistSlice.reducer,
    reviewSlice         : reviewSlice.reducer,
  },
});
