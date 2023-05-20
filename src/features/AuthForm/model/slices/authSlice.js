import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

/* eslint-disable no-param-reassign */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
      state.isAuth = true;
    },
    removeToken(state) {
      state.token = null;
      state.isAuth = false;
    },
  },
});
/* eslint-enable no-param-reassign */

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
