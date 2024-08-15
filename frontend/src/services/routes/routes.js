import React from 'react';
import Home from '../../pages/Home';
import Teams from '../../pages/Teams';
import Player from '../../pages/Player';

console.log('run: routes')

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
        element: <Player />,
    }
]

export default routes;