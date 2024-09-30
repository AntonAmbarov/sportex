import React from "react";
import { useGetTeamsQuery } from "../services/api/apiTeams";
import { Link } from "react-router-dom";

function Teams() {

    const { data, error, isLoading } = useGetTeamsQuery();

    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>);
    if (!data || data.length === 0) return (<div>Нет данных</div>);

    return (
        <div>
            <ul>
                {data.map(team => {
                    return <li key={team.id}>{<Link to={`/teams/${team.slug}`}>{team.title.rendered}</Link>}</li>;
                })}
            </ul>
        </div>
    )
}

export default Teams;