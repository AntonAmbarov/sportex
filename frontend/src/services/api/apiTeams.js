import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from '../../config/apiConfig';

console.log('run: apiTeams')
const api = createApi({
    reducerPath: 'pages',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getTeams: builder.query({
            query: () => ({
                url: '/teams?_fields=id,title,acf.logo',
                method: 'GET',
            })
        }),
        getTeam: builder.query({
            query: (slug) => ({
                url: `/teams?slug=${slug}&_fields=id,title,acf`,
                method: 'GET',
            })
        })
    })
})

export default api;
export const { useGetTeamsQuery, useGetTeamQuery } = api;