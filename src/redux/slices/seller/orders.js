import { createSlice } from "@reduxjs/toolkit";

// orders reducer
export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: "",
  },
  reducers: {
    setOrders: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.orders  = typeof action.payload.data.orders !=="undefined" ? action.payload.data.orders : [];
    },
  },
});


export const { setOrders } = orderSlice.actions;
