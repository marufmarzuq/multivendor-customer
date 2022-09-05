import { createSlice } from "@reduxjs/toolkit";

// moneyWithdraw reducer
export const moneyWithdrawSlice = createSlice({
  name: "moneyWithdraw",
  initialState: {
    moneyWithdraw: [],
    pendingBalance: 0.00,
    loading: false,
    error: "",
  },
  reducers: {
    setMoneyWithdraw: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.moneyWithdraw  = typeof action.payload.data.requests !=="undefined" ? action.payload.data.requests.data : [];
      state.pendingBalance = typeof action.payload.data !=="undefined" ? action.payload.data.pending_balance : '';
    },
  },
});

// commissionHis reducer
export const commissionHisSlice = createSlice({
  name: "commissionHis",
  initialState: {
    commissionHis: [],
    loading: false,
    error: "",
  },
  reducers: {
    setCommissionHis: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.commissionHis  = typeof action.payload.data.data !=="undefined" ? action.payload.data.data : [];
    },
  },
});



export const { setMoneyWithdraw } = moneyWithdrawSlice.actions;
export const { setCommissionHis } = commissionHisSlice.actions;
