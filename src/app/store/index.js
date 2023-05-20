import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/AuthForm/model/slices/authSlice";
import { userApi } from "shared/api";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
