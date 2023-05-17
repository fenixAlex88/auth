import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://jsonplaceholder.typicode.com/",
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
