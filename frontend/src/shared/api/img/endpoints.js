import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, paths } from '../config';

export const api = createApi({
    reducerPath: 'apiImgs',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getImgs: builder.query({
            query: () => ({
                url: paths.getImgs(),
                method: 'GET',
            })
        })
    })
})

export const { useGetImgsQuery } = api;