import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, paths } from 'shared/api/apiConfig';

const api = createApi({
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

export default api;
export const { useGetRolesQuery } = api;