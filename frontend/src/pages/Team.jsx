import React from "react";
import { useGetTextQuery } from "../services/api/api";

function Team() {
    const { data, error, isLoading } = useGetTextQuery(id);
    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>)
    return (
        <div>
            Команда
        </div>
    )
}

export default Team