import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl, { refreshToken, postComment } from "../../config/apiConfig";

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
})

const baseQueryRefresh = async (args, api, opts) => {
    let result = await baseQuery(args, api, opts);
    if (result.error && result.error.status === 401) {
        const { data } = await baseQuery(refreshToken, api, opts);
        if (data?.token) {
            localStorage.setItem('token', data.token);
            result = await baseQuery(args, api, opts);
        } else {
            localStorage.removeItem('token');
        }
    }
    return result;
}

const apiAuthorizedUsers = createApi({
    reducerPath: 'apiAuthorizedUsers',
    baseQuery: baseQueryRefresh,
    endpoints: (builder) => ({
        postComment: builder.mutation({
            query: (data) => ({
                url: postComment,
                method: 'POST',
                body: data,
            })
        }),
    })
})

export default apiAuthorizedUsers;