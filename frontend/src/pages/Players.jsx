import React from "react";
import { useGetPlayersQuery } from "../services/api/apiPlayers";

function Players() {
    const { data, error, isLoading } = useGetPlayersQuery();

    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>);
    if (!data || data.length === 0) return (<div>Нет данных</div>);

    return (
        <div>
            <ul>
                {data.map(player => <li key={player.id}>{player.title.rendered}</li>)}
            </ul>
        </div>
    )
}

export default Players;