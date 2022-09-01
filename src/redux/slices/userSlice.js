import { createSlice } from "@reduxjs/toolkit";

// users reducer
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
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.products = action.payload.data;
    },
  },
});

//single products reducer
export const signleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    product: [],
    loading: false,
    error: "",
  },

  reducers: {
    setSignleProduct: (state, action) => {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
      state.product = action.payload.data;
    },
  },
});

export const { setUser } = userSlice.actions;

export const { setProducts } = productSlice.actions;
export const { setSignleProduct } = signleProductSlice.actions;
// export default userSlice.reducer;
