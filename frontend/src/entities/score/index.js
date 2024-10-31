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
    selectScores,
    selectScoresError,
    selectScoresLoading
} from './model/selector';
export { default as avgScoresReducer } from './model/slice';