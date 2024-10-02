import { createApi } from "@reduxjs/toolkit/query/react";
import { paths } from "../../config/apiConfig";
import baseQueryRefresh from './refreshToken';

const apiScores = createApi({
    reducerPath: 'apiScores',
    baseQuery: baseQueryRefresh,
    endpoints: (builder) => ({
        getScoresAvg: builder.query({
            query: ({ type, postId, sport }) => ({
                url: paths.getScoresAvg(type, postId, sport),
                method: 'GET',
            }),
            keepUnusedDataFor: 60,
        }),
        getAllScores: builder.query({
            query: ({ type, postId, sport }) => ({
                url: paths.getAllScores(type, postId, sport),
                method: 'GET',
            })
        }),
        getAllScoresAvg: builder.query({
            query: () => ({
                url: paths.getAllScoresAvg(),
                method: 'GET',
            })
        }),
        postScoresPlayer: builder.mutation({
            query: (data) => ({
                url: paths.postScoresPlayer(),
                method: 'POST',
                body: data,
            })
        }),
        postScoresTeam: builder.mutation({
            query: (data) => ({
                url: paths.postScoresTeam(),
                method: 'POST',
                body: data,
            })
        }),
    })
})

export default apiScores;
export const { useGetScoresAvgQuery, useGetAllScoresQuery, useGetAllScoresAvgQuery, usePostScoresPlayerMutation, usePostScoresTeamMutation } = apiScores;