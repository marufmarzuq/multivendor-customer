import { createSlice } from "@reduxjs/toolkit";

// moneyWithdraw reducer
export const moneyWithdrawSlice = createSlice({
  name: "moneyWithdraw",
  initialState: {
    moneyWithdraw: [],
		total: 10,
    per_page: 10,
    pendingBalance: 0.00,
    loading: false,
    error: "",
  },
  reducers: {
    setMoneyWithdraw: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.pendingBalance = typeof action.payload.data !=="undefined" && action.payload.data.pending_balance;

      if ( typeof action.payload.data.requests !=="undefined" ) {
				state.moneyWithdraw  = action.payload.data.requests.data;
				state.total     = action.payload.data.requests.total;
				state.per_page  = action.payload.data.requests.per_page;
			}

    },
  },
});

// commissionHis reducer
export const commissionHisSlice = createSlice({
  name: "commissionHis",
  initialState: {
    commissionHis: [],
		total: 10,
    per_page: 10,
    loading: false,
    error: "",
  },
  reducers: {
    setCommissionHis: (state, action) => {
      state.loading   = action.payload.loading;
			state.commissionHis  = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
      state.total     = typeof action.payload.data.total !=="undefined" && action.payload.data.total;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
      state.error     = action.payload.error;
    },
  },
});



export const { setMoneyWithdraw } = moneyWithdrawSlice.actions;
export const { setCommissionHis } = commissionHisSlice.actions;
