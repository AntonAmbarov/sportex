import { createApi } from "@reduxjs/toolkit/query/react";
import { paths } from 'shared/api/apiConfig';
import baseQueryRefresh from './refreshToken';

const apiComments = createApi({
    reducerPath: 'apiComments',
    baseQuery: baseQueryRefresh,
    endpoints: (builder) => ({
        postComment: builder.mutation({
            query: (data) => ({
                url: paths.postComment(),
                method: 'POST',
                body: data,
            })
        }),
        getComments: builder.query({
            query: (id) => ({
                url: paths.getComments(id),
                method: 'GET',
            })
        })
    })
})

export default apiComments;
export const { usePostCommentMutation, useGetCommentsQuery } = apiComments;