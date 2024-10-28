import { configureStore } from '@reduxjs/toolkit';
import { apiTeams, teamsReducer } from 'entities/team';
import { apiPlayers, playersReducer } from 'entities/player';
import { apiScores, avgScoresReducer } from 'entities/score';
import { apiLeagues, leaguesReducer } from 'entities/league';
import { apiRoles, rolesReducer } from 'entities/role';
import { apiSports, sportsReducer } from 'entities/sport';
import apiAuth from '../../services/api/apiAuth';
import apiComments from '../../services/api/apiComments';
import apiImgs from '../../services/api/apiImgs';
import uiReducer from '../../slices/ui';
import { authorizedReducer } from 'shared/api/auth';
import imgsReducer from '../../slices/imgs';

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
        authorizedUser: authorizedReducer,
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