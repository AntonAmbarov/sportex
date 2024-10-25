import { configureStore } from '@reduxjs/toolkit';
import apiTeams from '../../services/api/apiTeams';
import apiPlayers from '../../services/api/apiPlayers';
import apiAuth from '../../services/api/apiAuth';
import apiComments from '../../services/api/apiComments';
import apiScores from '../../services/api/apiScores';
import apiImgs from '../../services/api/apiImgs';
import apiLeagues from '../../services/api/apiLeagues';
import apiRoles from '../../services/api/apiRoles';
import apiSports from '../../services/api/apiSports';
import uiReducer from '../../slices/ui';
import authorizedUserReducer from '../../shared/api/auth';
import teamsReducer from '../../slices/teams';
import playersReducer from '../../slices/players';
import leaguesReducer from '../../slices/leagues';
import sportsReducer from '../../slices/sports';
import rolesReducer from '../../slices/roles';
import imgsReducer from '../../slices/imgs';
import avgScoresReducer from '../../slices/avgScores';

export const store = configureStore({
    reducer: {
        [apiTeams.reducerPath]: apiTeams.reducer,
        [apiPlayers.reducerPath]: apiPlayers.reducer,
        [apiAuth.reducerPath]: apiAuth.reducer,
        [apiComments.reducerPath]: apiComments.reducer,
        [apiScores.reducerPath]: apiScores.reducer,
        [apiImgs.reducerPath]: apiImgs.reducer,
        [apiLeagues.reducerPath]: apiLeagues.reducer,
        [apiRoles.reducerPath]: apiRoles.reducer,
        [apiSports.reducerPath]: apiSports.reducer,
        ui: uiReducer,
        teams: teamsReducer,
        players: playersReducer,
        leagues: leaguesReducer,
        sports: sportsReducer,
        roles: rolesReducer,
        imgs: imgsReducer,
        authorizedUser: authorizedUserReducer,
        avgScores: avgScoresReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            apiTeams.middleware,
            apiPlayers.middleware,
            apiAuth.middleware,
            apiComments.middleware,
            apiScores.middleware,
            apiImgs.middleware,
            apiLeagues.middleware,
            apiRoles.middleware,
            apiSports.middleware,
        ),
})