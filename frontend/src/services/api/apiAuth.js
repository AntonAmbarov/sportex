import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl, { paths } from '../../config/apiConfig';

const apiAuth = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        register: builder.query({
            url: '/wp-json/wp/v2/users',

        }),
    })
})