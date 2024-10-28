import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, paths } from 'shared/api/config';

export const api = createApi({
    reducerPath: 'apiSports',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getSports: builder.query({
            query: () => ({
                url: paths.getSports(),
                method: 'GET',
            })
        })
    })
})

export const { useGetSportsQuery } = api;