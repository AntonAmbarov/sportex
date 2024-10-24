import React from "react";
import { useGetImg } from "shared/lib/useGetImg";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export function RowTable({ name, role, imgPlayerId, imgTeamId, slug }) {
    const imgPlayer = useGetImg(imgPlayerId, 'thumbnail'); //второй параметр size: thumbnail, medium или full. Если ничего не задано - medium
    const imgTeam = useGetImg(imgTeamId, 'thumbnail');

    return (
        <tr>
            <td>{<Image src={imgPlayer} roundedCircle />}</td>
            <td className="align-middle">{<Link to={`/players/${slug}`}>{name}</Link>}</td>
            <td className="align-middle"><Image src={imgTeam} roundedCircle className="me-3" />{role}</td>
            <td></td>
        </tr>
    )
}