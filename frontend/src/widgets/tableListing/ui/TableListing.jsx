import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { t } from 'i18next';

import { RowTable } from './RowTable';
import { selectPlayers, selectPlayersError, selectPlayersLoading } from 'entities/player';
import { selectRoles, selectRolesError, selectRolesLoading } from 'entities/role';
import { selectTeams, selectTeamsError, selectTeamsLoading } from 'entities/team';

export function TableListing({ teamId = null, sportId = null, leagueId = null }) {

    const players = useSelector(state => ({
        ids: selectPlayers(state).ids,
        entities: selectPlayers(state).entities,
        error: selectPlayersError(state),
        loading: selectPlayersLoading(state),
    }))

    const roles = useSelector(state => ({
        entities: selectRoles(state).entities,
        error: selectRolesError(state),
        loading: selectRolesLoading(state),
    }))

    const teams = useSelector(state => ({
        entities: selectTeams(state).entities,
        error: selectTeamsError(state),
        loading: selectTeamsLoading(state),
    }))

    if (players.error || roles.error || teams.error) return <div>{t('messages.error')}</div>;
    if (players.loading || roles.loading || teams.loading) return <div>{t('messages.isLoading')}</div>

    const result = players.ids.filter(id => {
        const { team, sport, league } = players.entities[id].acf;
        const teamMatch = teamId ? team === Number(teamId) : true;
        const sportMatch = sportId ? sport === Number(sportId) : true;
        const leagueMatch = leagueId ? league === Number(leagueId) : true;
        return teamMatch && sportMatch && leagueMatch;
    });

    return (
        <Table>
            <tbody>
                {result.map(id => {

                    const player = players.entities[id];
                    const team = player.acf.team;

                    const params = {
                        name: `${player.acf.name} ${player.acf.last_name}`,
                        role: roles.entities[player.acf.role].name,
                        slug: player.slug,
                        imgPlayerId: player.acf.logo,
                        imgTeamId: teams.entities[team].acf.logo,
                    }


                    return <RowTable key={id} {...params} />
                })}
            </tbody>
        </Table>
    )
}