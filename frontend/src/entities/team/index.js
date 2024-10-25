export {
    api as apiTeams,
    useGetTeamsQuery,
    useGetTeamQuery,
    useGetImgQuery
} from './api/endpoints';
export { fetchTeamsData } from './api/fetchTeamsData';
export { default as teamsReducer } from './model/slice';