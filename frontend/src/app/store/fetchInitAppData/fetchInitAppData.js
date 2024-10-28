import { fetchTeamsData } from 'entities/team';
import { fetchPlayersData } from 'entities/player';
import { fetchLeaguesData } from 'entities/league';
import { fetchRolesData } from 'entities/role';
import { fetchScoresData } from 'entities/score';
import { fetchSportsData } from 'entities/sport'

export const fetchInitAppData = () => async (dispatch) => {
    try {

        await new Promise.all([
            dispatch(fetchPlayersData()),
            dispatch(fetchTeamsData()),
            dispatch(fetchLeaguesData()),
            dispatch(fetchRolesData()),
            dispatch(fetchScoresData()),
            dispatch(fetchSportsData()),
        ]);

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}