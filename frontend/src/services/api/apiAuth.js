import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl, { paths } from '../../config/apiConfig';

const apiAuth = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => ({
                url: paths.register(),
                method: 'POST',
                body: user,
            })
        }),
        auth: builder.mutation({
            query: (user) => ({
                url: paths.auth(),
                method: 'POST',
                body: user,
            })
        }),
        getAdminToken: builder.mutation({
            query: () => ({
                url: paths.getAdminToken(),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        })
    })
})

export const { useRegisterMutation, useAuthMutation } = apiAuth;
export default apiAuth;