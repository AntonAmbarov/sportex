import apiPlayers from '../services/api/apiPlayers';
import apiTeams from '../services/api/apiTeams';
import apiLeagues from '../services/api/apiLeagues';
import apiSports from '../services/api/apiSports';
import apiRoles from '../services/api/apiRoles';
import apiImgs from '../services/api/apiImgs';
import apiScores from '../services/api/apiScores';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchInitAppData = createAsyncThunk(
    'fetchInitData',
    async (_, { dispatch, rejectWithValue }) => {

        try {
            const promises = [
                dispatch(apiPlayers.endpoints.getPlayers.initiate()),
                dispatch(apiTeams.endpoints.getTeams.initiate()),
                dispatch(apiLeagues.endpoints.getLeagues.initiate()),
                dispatch(apiSports.endpoints.getSports.initiate()),
                dispatch(apiRoles.endpoints.getRoles.initiate()),
                dispatch(apiImgs.endpoints.getImgs.initiate()),
                dispatch(apiScores.endpoints.getAllScoresAvg.initiate()),
            ];

            const resp = await Promise.all(promises);

            const error = resp.find(item => item.error);
            if (error) {
                return rejectWithValue(error.error);
            }

            return resp.reduce((acc, item) => {
                acc[item.endpointName] = item.data || [];
                return acc;
            }, {});

        } catch (err) {
            return rejectWithValue(err.message);
        }

    }
);

export default fetchInitAppData;
