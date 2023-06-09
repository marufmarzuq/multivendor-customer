import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "../slices/auth";

import {
  productSlice,
  wishlistSlice,
  reviewSlice,
} from "../slices/seller/products";

import { orderSlice } from "../slices/seller/orders";

import {
  sentRefundsSlice,
  receivedRefundsSlice,
} from "../slices/seller/refunds";

import {
  moneyWithdrawSlice,
  commissionHisSlice,
} from "../slices/seller/payments";
import { shopSettingSlice } from "../slices/seller/shopSetting";
import { customerWishlistSlice } from "../slices/wishlist";
import { compareSlice } from "../slices/compare";
import { miniCartSlice } from "../slices/miniCart";
import { quickViewSlice } from "../slices/quickView";

export const store = configureStore({
  reducer: {
    productSlice: productSlice.reducer,
    orderSlice: orderSlice.reducer,
    sentRefundsSlice: sentRefundsSlice.reducer,
    receivedRefundsSlice: receivedRefundsSlice.reducer,
    wishlistSlice: wishlistSlice.reducer,
    reviewSlice: reviewSlice.reducer,
    moneyWithdrawSlice: moneyWithdrawSlice.reducer,
    commissionHisSlice: commissionHisSlice.reducer,
    shopSettingReducer: shopSettingSlice.reducer,
    authSlice: authSlice.reducer,
    customerWishlist: customerWishlistSlice.reducer,
    quickView: quickViewSlice.reducer,
    compare: compareSlice.reducer,
    miniCart: miniCartSlice.reducer,
  },
});
