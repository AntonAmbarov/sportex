import React from "react";
import { useGetTeamsQuery } from "../services/api/apiTeams";
// import { useParams } from "react-router-dom";

console.log('run: Teams')

function Teams() {
    const { data, error, isLoading } = useGetTeamsQuery();
    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>)
    return (
        <div>
            {data.map(team => team.title)}
        </div>
    )
}

export default Teams;