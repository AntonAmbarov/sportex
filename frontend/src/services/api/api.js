import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    reducerPath: 'pages',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://seomasvg.beget.tech/wp-json/wp/v2/pages/' }),
    endpoints: (builder) => ({
        getText: builder.query({
            query: (id) => ({
                url: `${id}`,
                method: 'GET',
            }),
        })
    })
})

export default api;
export const { useGetTextQuery } = api;