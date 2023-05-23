import { apiSlice } from "../apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "/auth/token/login",
        method: "POST",
        body: { username, password },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/token/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
