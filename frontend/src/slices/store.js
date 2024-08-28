import { configureStore } from '@reduxjs/toolkit';
import apiTeams from '../services/api/apiTeams';
import apiPlayers from '../services/api/apiPlayers';
import apiAuth from '../services/api/apiAuth';
import apiComments from '../services/api/apiComments';
import uiReducer from './ui';
import tokenReducer from './token';

const store = configureStore({
    reducer: {
        [apiTeams.reducerPath]: apiTeams.reducer,
        [apiPlayers.reducerPath]: apiPlayers.reducer,
        [apiAuth.reducerPath]: apiAuth.reducer,
        [apiComments.reducerPath]: apiComments.reducer,
        ui: uiReducer,
        token: tokenReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            apiTeams.middleware,
            apiPlayers.middleware,
            apiAuth.middleware,
            apiComments.middleware
        ),
})

export default store;