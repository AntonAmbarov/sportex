import React from "react";
import { useGetTextQuery } from "../services/api/api";

function Player() {
    const { data, error, isLoading } = useGetTextQuery(id);
    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>)
    return (
        <div>
            Игрок
        </div>
    )
}

export default Player;