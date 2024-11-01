export {
    api as apiLeagues,
    useGetLeaguesQuery
} from './api/endpoints'
export { fetchLeaguesData } from './api/fetchLeaguesData';
export {
    selectLeagues,
    selectLeaguesError,
    selectLeaguesLoading
} from './model/selectors';
export { default as leaguesReducer } from './model/slice';