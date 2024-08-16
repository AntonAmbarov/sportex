import { configureStore } from '@reduxjs/toolkit';
import apiTeams from '../services/api/apiTeams';
import apiPlayers from '../services/api/apiPlayers';
import menuReducer from './menuSlice';

const store = configureStore({
    reducer: {
        [apiTeams.reducerPath]: apiTeams.reducer,
        [apiPlayers.reducerPath]: apiPlayers.reducer,
        menu: menuReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiTeams.middleware, apiPlayers.middleware),
})

export default store;