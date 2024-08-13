import React from 'react';
import Home from '../../pages/Home';
import Team from '../../pages/Team';
import Player from '../../pages/Player';
import Pages from '../../pages/Pages';

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/team',
        element: <Team />,
    },
    {
        path: '/player',
        element: <Player />,
    },
    {
        path: '/pages/:id',
        element: <Pages />,
    }
]

export default routes;