import { createApi } from "@reduxjs/toolkit/query/react";
import { paths } from "../../config/apiConfig";
import baseQueryRefresh from './refreshToken';

const apiScores = createApi({
    reducerPath: 'scores',
    baseQuery: baseQueryRefresh,
    endpoints: (builder) => ({
        getScoresPlayer: builder.query({
            query: (data) => ({
                url: paths.scoresPlayer(),
                method: 'GET',
                body: data,
            })
        }),
        getScoresTeam: builder.query({
            query: (data) => ({
                url: paths.scoresTeam(),
                method: 'GET',
                body: data,
            })
        }),
        postScoresPlayer: builder.mutation({
            query: (data) => ({
                url: paths.scoresPlayer(),
                method: 'POST',
                body: data,
            })
        }),
        postScoresTeam: builder.mutation({
            query: (data) => ({
                url: paths.scoresTeam(),
                method: 'POST',
                body: data,
            })
        })
    })
})

export default apiScores;
export const { useGetScoresPlayerQuery, useGetScoresTeamQuery, usePostScoresPlayerMutation, usePostScoresTeamMutation } = apiScores;