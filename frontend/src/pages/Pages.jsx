import React from "react";
import { useGetTextQuery } from "../services/api/api";
import { useParams } from "react-router-dom";

function Pages() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetTextQuery(id);
    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>)
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </div>
    )
}

export default Pages;