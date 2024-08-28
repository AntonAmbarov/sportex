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
        getAccessToken: builder.mutation({
            query: (user) => ({
                url: paths.auth(),
                method: 'POST',
                body: user,
            })
        }),
    })
})

export const { useRegisterMutation, useGetAccessTokenMutation } = apiAuth;
export default apiAuth;