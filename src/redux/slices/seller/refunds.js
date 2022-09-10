import { createSlice } from "@reduxjs/toolkit";

// sent refunds
export const sentRefundsSlice = createSlice({
  name: "sentRefunds",
  initialState: {
    sentRefunds: [],
		last_page: 10,
    per_page: 10,
		current_page: 1,
    loading: false,
    error: "",
  },
  reducers: {
    setSentRefunds: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.sentRefunds = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
			state.last_page     = typeof action.payload.data.last_page !=="undefined" && action.payload.data.last_page;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
			state.current_page  = typeof action.payload.data.current_page !=="undefined" && action.payload.data.current_page;
    },
  },
});

// receive refunds
export const receivedRefundsSlice = createSlice({
  name: "receivedRefunds",
  initialState: {
    receivedRefunds: [],
		last_page: 10,
    per_page: 10,
		current_page: 1,
    loading: false,
    error: "",
  },
  reducers: {
    setReceivedRefunds: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.receivedRefunds = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
			state.last_page     = typeof action.payload.data.last_page !=="undefined" && action.payload.data.last_page;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
			state.current_page  = typeof action.payload.data.current_page !=="undefined" && action.payload.data.current_page;
    },
  },
});


export const { setReceivedRefunds } = receivedRefundsSlice.actions;
export const { setSentRefunds } = sentRefundsSlice.actions;
