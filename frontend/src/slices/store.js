import { configureStore } from '@reduxjs/toolkit';
import apiTeams from '../services/api/apiTeams'

const store = configureStore({
    reducer: {
        [apiTeams.reducerPath]: apiTeams.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiTeams.middleware),
})

export default store;