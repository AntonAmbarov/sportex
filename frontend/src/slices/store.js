import { configureStore } from '@reduxjs/toolkit';
import apiTeams from '../services/api/apiTeams';
import apiPlayers from '../services/api/apiPlayers';
import apiAuth from '../services/api/apiAuth';
import apiComments from '../services/api/apiComments';
import apiScores from '../services/api/apiScores';
import uiReducer from './ui';
import authorizedUserReducer from './authorizedUser';

const store = configureStore({
    reducer: {
        [apiTeams.reducerPath]: apiTeams.reducer,
        [apiPlayers.reducerPath]: apiPlayers.reducer,
        [apiAuth.reducerPath]: apiAuth.reducer,
        [apiComments.reducerPath]: apiComments.reducer,
        [apiScores.reducerPath]: apiScores.reducer,
        ui: uiReducer,
        authorizedUser: authorizedUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            apiTeams.middleware,
            apiPlayers.middleware,
            apiAuth.middleware,
            apiComments.middleware,
            apiScores.middleware,
        ),
})

export default store;