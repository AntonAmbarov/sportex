import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, paths } from 'shared/api/apiConfig';

const api = createApi({
    reducerPath: 'apiPlayers',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: () => ({
                url: paths.getPlayers(),
                method: 'GET',
            })
        }),
        getPlayer: builder.query({
            query: (slug) => ({
                url: paths.getPlayer(slug),
                method: 'GET',
            })
        }),
        getPhoto: builder.query({
            query: (id) => ({
                url: paths.getImg(id),
                method: 'GET',
            })
        })

    })
})

export default api;
export const { useGetPlayersQuery, useGetPlayerQuery, useGetPhotoQuery } = api;