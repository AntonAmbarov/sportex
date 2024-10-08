import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import RowTable from "./RowTable";

function TableListing({ teamId = null, sportId = null, leagueId = null }) {
    const { ids, entities } = useSelector(state => state.players);
    const { entities: roles } = useSelector(state => state.roles);

    const result = ids.filter(id => {
        const { team, sport, league } = entities[id].acf;
        const teamMatch = teamId ? team === teamId : true;
        const sportMatch = sportId ? sport === sportId : true;
        const leagueMatch = leagueId ? league === leagueId : true;
        return teamMatch && sportMatch && leagueMatch;
    });

    return (
        <Table>
            <tbody>
                {result.map(id => {

                    const player = entities[id];

                    const params = {
                        name: `${player.acf.name} ${player.acf.last_name}`,
                        role: roles[player.acf.role].name,
                        slug: player.slug,
                        imgId: player.acf.logo,
                    }


                    return <RowTable key={id} {...params} />
                })}
            </tbody>
        </Table>
    )
}

export default TableListing;