import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl, { paths } from '../../config/apiConfig';

const api = createApi({
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

export default api;
export const { useGetSportsQuery } = api;