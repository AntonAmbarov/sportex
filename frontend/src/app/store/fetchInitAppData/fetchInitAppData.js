import { fetchTeamsData } from 'entities/team';
import { fetchPlayersData } from 'entities/player';
import { fetchLeaguesData } from 'entities/league';
import { fetchRolesData } from 'entities/role';
import { fetchScoresData } from 'entities/score';
import { fetchSportsData } from 'entities/sport'
import { fetchImgsData } from 'shared/api/img/fetchImgsData';

export const fetchInitAppData = () => async (dispatch) => {
    try {
        const promises = [
            dispatch(fetchPlayersData()),
            dispatch(fetchTeamsData()),
            dispatch(fetchLeaguesData()),
            dispatch(fetchRolesData()),
            dispatch(fetchScoresData()),
            dispatch(fetchSportsData()),
            dispatch(fetchImgsData()),
        ];

        await Promise.all(promises);

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}