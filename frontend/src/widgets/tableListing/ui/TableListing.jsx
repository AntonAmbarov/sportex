import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { t } from 'i18next';

import { RowTable } from './RowTable';
import { selectPlayers, selectPlayersError, selectPlayersLoading } from 'entities/player';
import { selectRoles, selectRolesError, selectRolesLoading } from 'entities/role';
import { selectTeams, selectTeamsError, selectTeamsLoading } from 'entities/team';

export function TableListing({ teamId = null, sportId = null, leagueId = null }) {
    // const { ids, entities, loading: loadingPlayers, error: errorPlayers } = useSelector(state => state.players);
    // const { entities: roles, loading: loadingRoles, error: errorRoles } = useSelector(state => state.roles);
    // const { entities: teams, loading: loadingTeams, error: errorTeams } = useSelector(state => state.teams);

    const { ids, entities } = useSelector(selectPlayers);
    const loadingPlayers = useSelector(selectPlayersLoading);
    const errorPlayers = useSelector(selectPlayersError);
    const { entities: roles } = useSelector(selectRoles);
    const loadingRoles = useSelector(selectRolesLoading);
    const errorRoles = useSelector(selectRolesError);
    const { entities: teams } = useSelector(selectTeams);
    const loadingTeams = useSelector(selectTeamsLoading);
    const errorTeams = useSelector(selectTeamsError);

    if (errorPlayers || errorRoles || errorTeams) return <div>{t('messages.error')}</div>;
    if (loadingPlayers || loadingRoles || loadingTeams) return <div>{t('messages.isLoading')}</div>

    const result = ids.filter(id => {
        const { team, sport, league } = entities[id].acf;
        const teamMatch = teamId ? team === Number(teamId) : true;
        const sportMatch = sportId ? sport === Number(sportId) : true;
        const leagueMatch = leagueId ? league === Number(leagueId) : true;
        return teamMatch && sportMatch && leagueMatch;
    });

    return (
        <Table>
            <tbody>
                {result.map(id => {

                    const player = entities[id];
                    const team = player.acf.team;

                    const params = {
                        name: `${player.acf.name} ${player.acf.last_name}`,
                        role: roles[player.acf.role].name,
                        slug: player.slug,
                        imgPlayerId: player.acf.logo,
                        imgTeamId: teams[team].acf.logo,
                    }


                    return <RowTable key={id} {...params} />
                })}
            </tbody>
        </Table>
    )
}