import React from "react";
import { useGetPlayersQuery } from "../services/api/apiPlayers";
import { Link } from "react-router-dom";

function Players() {
    const { data, error, isLoading } = useGetPlayersQuery();

    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>);
    if (!data || data.length === 0) return (<div>Нет данных</div>);

    return (
        <div>
            <ul>
                {data.map(player => {
                    const title = `${player.acf.name} ${player.acf.last_name}`
                    return <li key={player.id}>{<Link to={`/players/${player.slug}`}>{title}</Link>}</li>;
                })}
            </ul>
        </div>
    )
}

export default Players;