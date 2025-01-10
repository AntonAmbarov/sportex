import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>404</h1>
            <p>{'Страница не найдена'}</p>
            <Button className="mb-3" onClick={() => navigate('/')}>{'На главную'}</Button>
        </div>
    )
}