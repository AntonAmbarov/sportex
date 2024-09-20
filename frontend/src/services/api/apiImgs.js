import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { paths } from "../../config/apiConfig";

const api = createApi({
    reducerPath: 'imgs',
    baseQuery: fetchBaseQuery({ baseUrl: paths.baseUrl }),
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