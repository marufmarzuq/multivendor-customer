import { createSlice } from "@reduxjs/toolkit";

// sent refunds
export const sentRefundsSlice = createSlice({
  name: "sentRefunds",
  initialState: {
    sentRefunds: [],
    loading: false,
    error: "",
  },
  reducers: {
    setSentRefunds: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.sentRefunds  = typeof action.payload.data.data !=="undefined" ? action.payload.data.data : [];
    },
  },
});


export const { setSentRefunds } = sentRefundsSlice.actions;
