import { configureStore } from "@reduxjs/toolkit";

import {
  productSlice,
  signleProductSlice,
  userSlice,
} from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    productReducer: productSlice.reducer,
    singleProdcutReducer: signleProductSlice.reducer,
  },
});
