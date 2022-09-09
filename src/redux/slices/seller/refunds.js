import { createSlice } from "@reduxjs/toolkit";

// sent refunds
export const sentRefundsSlice = createSlice({
  name: "sentRefunds",
  initialState: {
    sentRefunds: [],
		total: 10,
    per_page: 10,
    loading: false,
    error: "",
  },
  reducers: {
    setSentRefunds: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.sentRefunds = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
			state.total     = typeof action.payload.data.total !=="undefined" && action.payload.data.total;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
    },
  },
});

// receive refunds
export const receivedRefundsSlice = createSlice({
  name: "receivedRefunds",
  initialState: {
    receivedRefunds: [],
		total: 10,
    per_page: 10,
    loading: false,
    error: "",
  },
  reducers: {
    setReceivedRefunds: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.receivedRefunds = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
			state.total     = typeof action.payload.data.total !=="undefined" && action.payload.data.total;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
    },
  },
});


export const { setReceivedRefunds } = receivedRefundsSlice.actions;
export const { setSentRefunds } = sentRefundsSlice.actions;
