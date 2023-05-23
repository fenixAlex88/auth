import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuth: false,
};

/* eslint-disable no-param-reassign */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      const { token } = action.payload;
      localStorage.setItem("token", token);
      state.token = token;
      state.isAuth = true;
    },
    removeToken(state) {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuth = false;
    },
  },
});
/* eslint-enable no-param-reassign */

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
