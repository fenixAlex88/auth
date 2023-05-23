import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/AuthForm/model/authSlice";
import { authApi } from "shared/api";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
