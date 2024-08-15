import React from "react";
import { useGetTeamsQuery } from "../services/api/apiTeams";
// import { useParams } from "react-router-dom";

console.log('run: Teams')

function Teams() {

    const { data, error, isLoading } = useGetTeamsQuery();

    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>);
    if (!data || data.length === 0) return (<div>Нет данных</div>);

    return (
        <div>
            <ul>
                {data.map(team => <li key={team.id}>{team.title.rendered}</li>)}
            </ul>
        </div>
    )
}

export default Teams;