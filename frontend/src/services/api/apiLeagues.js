import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, paths } from 'shared/api/apiConfig';

const api = createApi({
    reducerPath: 'apiLeagues',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getLeagues: builder.query({
            query: () => ({
                url: paths.getLeagues(),
                method: 'GET',
            })
        })
    })
})

export default api;
export const { useGetLeaguesQuery } = api;