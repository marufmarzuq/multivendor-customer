import { createSlice } from "@reduxjs/toolkit";

export const shopSettingSlice = createSlice({
  name: "shop Setting",
  initialState: {
    setting: {},
    error: "",
    loading: false,
  },

  reducers: {
    setShopSetting: (state, action) => {
      state.setting = action.payload.data;
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
  },
});

export const { setShopSetting } = shopSettingSlice.actions;
