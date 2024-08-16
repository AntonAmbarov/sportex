import React from 'react';
import Home from '../../pages/Home';
import Teams from '../../pages/Teams';
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
    }
]

export default routes;