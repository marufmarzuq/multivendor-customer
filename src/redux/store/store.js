import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../slices/userSlice";
import productSlice from "../slices/seller/productSlice";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    productSlice: productSlice,
  },
});
