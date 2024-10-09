import React from "react";
import useGetImg from "../../../hooks/useGetImg";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function RowTable({ name, role, imgId, slug }) {
    const img = useGetImg(imgId, 'thumbnail'); //второй параметр size: thumbnail, medium или full. Если ничего не задано - medium

    return (
        <tr>
            <td>{<Image src={img} roundedCircle />}</td>
            <td className="align-middle">{<Link to={`/players/${slug}`}>{name}</Link>}</td>
            <td className="align-middle">{role}</td>
        </tr>
    )
}

export default RowTable;