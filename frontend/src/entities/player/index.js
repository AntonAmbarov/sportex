export {
    api as apiPlayers,
    useGetPlayersQuery,
    useGetPlayerQuery,
    useGetPhotoQuery
} from './api/endpoints'
export { fetchPlayersData } from './api/fetchPlayersData';
export { default as playersReducer } from './model/slice';