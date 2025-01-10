export {
    api as apiSports,
    useGetSportsQuery
} from './api/endpoints'
export { fetchSportsData } from './api/fetchSportsData';
export {
    selectSports,
    selectSportsError,
    selectSportsLoading
} from './model/selectors';
export { default as sportsReducer } from './model/slice';