import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../shared/config";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: () => ({
        url: "users/1",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation } = userApi;
