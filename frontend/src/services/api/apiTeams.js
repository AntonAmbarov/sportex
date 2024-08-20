import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from '../../config/apiConfig';

const api = createApi({
    reducerPath: 'teams',
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
        }),
        getImg: builder.query({
            query: (id) => ({
                url: `/media/${id}?_fields=media_details`,
                method: 'GET',
            })
        })
    })
})

export default api;
export const { useGetTeamsQuery, useGetTeamQuery, useGetImgQuery } = api;