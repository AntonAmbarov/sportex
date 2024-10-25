import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TableListing } from 'widgets/tableListing';
import { Filter } from 'features/filter';

export function Players() {
    const { t } = useTranslation();
    const teams = useSelector(state => state.teams);
    const leagues = useSelector(state => state.leagues);
    const [team, setTeam] = useState(null);
    const [league, setLeague] = useState(null);

    const handleSelectTeam = (id) => (setTeam(id));
    const handleSelectLeague = (id) => (setLeague(id));

    const filterItems = [
        { title: t('ui.filterLeague'), options: leagues, onSelect: handleSelectLeague },
        { title: t('ui.filterTeam'), options: teams, onSelect: handleSelectTeam }
    ]

    return (
        <Container>
            <h1 className="mb-3">{t('titles.playersPage')}</h1>
            <div className="d-flex flex-wrap mb-3">
                {filterItems.map(({ title, options, onSelect }, i) => (
                    <div className="me-3" key={i}>
                        <Filter title={title} options={options} onSelect={onSelect} />
                    </div>
                ))}
            </div>
            <TableListing teamId={team} leagueId={league} />
        </Container>
    )
}