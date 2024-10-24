import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, paths } from 'shared/api/apiConfig';

const api = createApi({
    reducerPath: 'apiImgs',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getImgs: builder.query({
            query: () => ({
                url: paths.getImgs(),
                method: 'GET',
            })
        })
    })
})

export default api;
export const { useGetImgsQuery } = api;