import { createSlice } from "@reduxjs/toolkit";

// products reducer
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    total: 10,
    per_page: 10,
    loading: false,
    error: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.products  = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
      state.total     = typeof action.payload.data.total !=="undefined" && action.payload.data.total;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
    },
  },
});

// products wishlist
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
		total: 10,
    per_page: 10,
    loading: false,
    error: "",
  },
  reducers: {
    setWishlist: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.wishlist  = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
			state.total     = typeof action.payload.data.total !=="undefined" && action.payload.data.total;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
    },
  },
});

// products reviews
export const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
		total: 10,
    per_page: 10,
    loading: false,
    error: "",
  },
  reducers: {
    setReviews: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.reviews   = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
			state.total     = typeof action.payload.data.total !=="undefined" && action.payload.data.total;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
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

export const { setProducts }      = productSlice.actions;
export const { setSingleProduct } = singleProductSlice.actions;
export const { setWishlist }      = wishlistSlice.actions;
export const { setReviews }       = reviewSlice.actions;