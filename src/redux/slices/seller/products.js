import { createSlice } from "@reduxjs/toolkit";

// products reducer
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    last_page: 10,
    per_page: 10,
    current_page: 1,
    loading: false,
    error: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.products  = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
      state.last_page     = typeof action.payload.data.last_page !=="undefined" && action.payload.data.last_page;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
      state.current_page  = typeof action.payload.data.current_page !=="undefined" && action.payload.data.current_page;
    },
  },
});

// products wishlist
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
		last_page: 10,
    per_page: 10,
		current_page: 1,
    loading: false,
    error: "",
  },
  reducers: {
    setWishlist: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.wishlist  = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
			state.last_page     = typeof action.payload.data.last_page !=="undefined" && action.payload.data.last_page;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
			state.current_page  = typeof action.payload.data.current_page !=="undefined" && action.payload.data.current_page;
    },
  },
});

// products reviews
export const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
		last_page: 10,
    per_page: 10,
		current_page: 1,
    loading: false,
    error: "",
  },
  reducers: {
    setReviews: (state, action) => {
      state.loading   = action.payload.loading;
      state.error     = action.payload.error;
      state.reviews   = typeof action.payload.data.data !=="undefined" && action.payload.data.data;
			state.last_page     = typeof action.payload.data.last_page !=="undefined" && action.payload.data.last_page;
      state.per_page  = typeof action.payload.data.per_page !=="undefined" && action.payload.data.per_page;
			state.current_page  = typeof action.payload.data.current_page !=="undefined" && action.payload.data.current_page;
    },
  },
});

export const { setProducts }      = productSlice.actions;
export const { setWishlist }      = wishlistSlice.actions;
export const { setReviews }       = reviewSlice.actions;