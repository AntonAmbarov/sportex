import React from "react";
import { Container } from "react-bootstrap";
import TableListing from "../components/shared/TableListing";
import { useTranslation } from "react-i18next";

function Players() {
    const { t } = useTranslation();

    return (
        <Container>
            <h1 className="mb-3">{t('titles.playersPage')}</h1>
            <TableListing />
            {/* <ul>
                {ids.map(id => {
                    const player = entities[id];
                    return <li key={id}>{<Link to={`/players/${player.slug}`}>{player.title.rendered}</Link>}</li>;
                })}
            </ul> */}
        </Container>
    )
}

export default Players;