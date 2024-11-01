export {
    api as apiScores,
    useGetScoresAvgQuery,
    useGetAllScoresQuery,
    useGetAllScoresAvgQuery,
    usePostScoresPlayerMutation,
    usePostScoresTeamMutation
} from './api/endpoints'
export { fetchScoresData } from './api/fetchScoresData';
export {
    selectAvgScores,
    selectAvgScoresError,
    selectAvgScoresLoading,
    selectAvgScoreById
} from './model/selector';
export { default as avgScoresReducer } from './model/slice';