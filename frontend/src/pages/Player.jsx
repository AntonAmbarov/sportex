import React from "react";
import { useGetTextQuery } from "../services/api/api";
import { useParams } from "react-router-dom";

function Player() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetTextQuery(id);
    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>)
    return (
        <div>
            {data.title.rendered}
        </div>
    )
}

export default Player;