import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.users = action.payload.data;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
