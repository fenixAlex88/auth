import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice";
import { userApi } from "./userApi";

const store = configureStore({
  reducer: {
    user: useReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
