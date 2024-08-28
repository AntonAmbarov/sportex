import { createApi } from "@reduxjs/toolkit/query/react";
import { paths } from "../../config/apiConfig";
import baseQueryRefresh from './refreshToken';

const apiComments = createApi({
    reducerPath: 'comments',
    baseQuery: baseQueryRefresh,
    endpoints: (builder) => ({
        postComment: builder.mutation({
            query: (data) => ({
                url: paths.postComment,
                method: 'POST',
                body: data,
            })
        }),
    })
})

export default apiComments;