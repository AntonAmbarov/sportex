import React from "react";
import { useGetTextQuery } from "../services/api/api";

function Team() {
    const { data, error, isLoading } = useGetTextQuery(id);
    if (isLoading) return (<div>��������</div>);
    if (error) return (<div>������</div>)
    return (
        <div>
            �������
        </div>
    )
}

export default Team