import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl, { paths } from '../../config/apiConfig';

const api = createApi({
    reducerPath: 'apiTeams',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getTeams: builder.query({
            query: () => ({
                url: paths.getTeams(),
                method: 'GET',
            })
        }),
        getTeam: builder.query({
            query: (slug) => ({
                url: paths.getTeam(slug),
                method: 'GET',
            })
        }),
        getImg: builder.query({
            query: (id) => ({
                url: paths.getImg(id),
                method: 'GET',
            })
        })
    })
})

export default api;
export const { useGetTeamsQuery, useGetTeamQuery, useGetImgQuery } = api;