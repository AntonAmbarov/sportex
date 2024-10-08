import React, { useMemo, useCallback } from "react";
import { Image, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PlayersList({ teamId = null, sportId = null, leagueId = null }) {
    const { ids, entities } = useSelector(state => state.players);
    const { entities: roles } = useSelector(state => state.roles);
    const { entities: photos } = useSelector(state => state.imgs);
    const { t } = useTranslation();

    const result = useMemo(() => (ids.filter(id => {
        const { team, sport, league } = entities[id].acf;
        const teamMatch = teamId ? team === teamId : true;
        const sportMatch = sportId ? sport === sportId : true;
        const leagueMatch = leagueId ? league === leagueId : true;
        return teamMatch && sportMatch && leagueMatch;
    })), [ids, entities, teamId, sportId, leagueId]);

    const renderRows = useCallback(() => {
        if (result.length === 0) return (t('players.empty'))

        return result.map(id => {
            const player = entities[id];
            const name = `${player.acf.name} ${player.acf.last_name}`;
            const slug = player.slug;
            const role = roles[player.acf.role].name;
            const photoUrl = photos[player.acf.logo].media_details.sizes.thumbnail.source_url;

            return (
                <tr key={id}>
                    <td>{<Image src={photoUrl} roundedCircle />}</td>
                    <td className="align-middle">{<Link to={`/players/${slug}`}>{name}</Link>}</td>
                    <td className="align-middle">{role}</td>
                </tr>
            )
        })
    }, [result, entities, roles, photos]);

    return (
        <Table>
            <tbody>
                {renderRows()}
            </tbody>
        </Table>
    )
}

export default PlayersList;