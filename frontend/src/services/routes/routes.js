import React from 'react';
import Home from '../../pages/Home';
import Teams from '../../pages/Teams';
import Team from '../../pages/team/Team';
import Players from '../../pages/Players';

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
        path: '/teams/:slug',
        element: <Team />,
    }
]

export default routes;