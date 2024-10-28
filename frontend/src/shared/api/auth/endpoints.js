import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, paths } from '../config';

export const api = createApi({
    reducerPath: 'apiAuth',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => ({
                url: paths.register(),
                method: 'POST',
                body: user,
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url: paths.auth(),
                method: 'POST',
                body: user,
            })
        }),
    })
})

export const { useRegisterMutation, useLoginMutation } = api;