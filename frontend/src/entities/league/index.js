export {
    api as apiLeagues,
    useGetLeaguesQuery
} from './api/endpoints'
export { fetchLeaguesData } from './api/fetchLeaguesData';
export {
    selectLeaques,
    selectLeaquesError,
    selectLeaquesLoading
} from './model/selectors';
export { default as leaguesReducer } from './model/slice';