import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { RowTable } from './RowTable';

export function TableListing({ teamId = null, sportId = null, leagueId = null }) {
    const { ids, entities } = useSelector(state => state.players);
    const { entities: roles } = useSelector(state => state.roles);
    const { entities: teams } = useSelector(state => state.teams);

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