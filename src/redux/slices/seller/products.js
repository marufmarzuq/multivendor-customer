import { createSlice } from "@reduxjs/toolkit";

// products reducer
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.products  = action.payload.data.products;
    },
  },
});

//single products reducer
export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    product: [],
    loading: false,
    error: "",
  },

  reducers: {
    setSingleProduct: (state, action) => {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.product = action.payload.data;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const { setSingleProduct } = singleProductSlice.actions;