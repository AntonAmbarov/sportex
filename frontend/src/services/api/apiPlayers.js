import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl, { paths } from '../../config/apiConfig';

const api = createApi({
    reducerPath: 'players',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: (teamId) => ({
                url: paths.getPlayers(teamId),
                method: 'GET',
            })
        }),
        getPlayer: builder.query({
            query: (slug) => ({
                url: paths.getPlayer(slug),
                method: 'GET',
            })
        })
    })
})

export default api;
export const { useGetPlayersQuery, useGetPlayerQuery } = api;