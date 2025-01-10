import { createApi } from "@reduxjs/toolkit/query/react";
import { paths } from 'shared/api/config';
import { baseQueryRefresh } from 'shared/api/refreshToken';

export const api = createApi({
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
        }),
    })
})

export const { usePostCommentMutation, useGetCommentsQuery } = api;