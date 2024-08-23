import { configureStore } from '@reduxjs/toolkit';
import apiTeams from '../services/api/apiTeams';
import apiPlayers from '../services/api/apiPlayers';
import uiReducer from './ui';

const store = configureStore({
    reducer: {
        [apiTeams.reducerPath]: apiTeams.reducer,
        [apiPlayers.reducerPath]: apiPlayers.reducer,
        ui: uiReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiTeams.middleware, apiPlayers.middleware),
})

export default store;