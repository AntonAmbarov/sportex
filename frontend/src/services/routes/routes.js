import React from 'react';
import Home from '../../pages/Home';
import Teams from '../../pages/Teams';
import Team from '../../pages/team/Team';
import Players from '../../pages/Players';
import Player from '../../pages/Player';

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/teams',
        element: <Teams />,
    },
    {
        path: '/players',
        element: <Players />,
    },
    {
        path: '/players/:slug',
        element: <Player />,
    },
    {
        path: '/teams/:slug',
        element: <Team />,
    }
]

export default routes;