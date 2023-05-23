import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "shared/config";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set("Authorization", `Token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
