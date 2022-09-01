import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "user",
  initialState: {
    products: [],
    loading: false,
    error: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.products = action.payload.data;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
