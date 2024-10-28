import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, paths } from 'shared/api/apiConfig';

export const api = createApi({
    reducerPath: 'apiRoles',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getRoles: builder.query({
            query: () => ({
                url: paths.getRoles(),
                method: 'GET',
            })
        })
    })
})

export const { useGetRolesQuery } = api;