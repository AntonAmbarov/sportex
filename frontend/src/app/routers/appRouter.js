import React from 'react';
import { Home } from 'pages/home';
import { Teams } from 'pages/teams';
import { Team } from 'pages/team';
import { Players } from 'pages/players';
import { Player } from 'pages/player';
import { UserProfile } from 'pages/userProfile';

export const appRouter = [
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
    },
    {
        path: '/profile',
        element: <UserProfile />
    }
]