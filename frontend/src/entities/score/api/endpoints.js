import { createApi } from "@reduxjs/toolkit/query/react";
import { paths } from 'shared/api/apiConfig';
import baseQueryRefresh from 'services/api/refreshToken';

export const api = createApi({
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

export const { useGetScoresAvgQuery, useGetAllScoresQuery, useGetAllScoresAvgQuery, usePostScoresPlayerMutation, usePostScoresTeamMutation } = api;