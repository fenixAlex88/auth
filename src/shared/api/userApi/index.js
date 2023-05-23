import { apiSlice } from "../apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/auth/token/me",
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
