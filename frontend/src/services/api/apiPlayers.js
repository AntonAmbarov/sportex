import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from '../../config/apiConfig';

const api = createApi({
    reducerPath: 'players',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: () => ({
                url: '/players?_fields=id,title,acf.logo',
                method: 'GET',
            })
        }),
        getPlayer: builder.query({
            query: (slug) => ({
                url: `/players?slug=${slug}&_fields=id,title,acf`,
                method: 'GET',
            })
        })
    })
})

export default api;
export const { useGetPlayersQuery, useGetPlayerQuery } = api;