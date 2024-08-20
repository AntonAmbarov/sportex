import React from "react";
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const data = [
    { name: 'Команды', path: '/teams' },
    { name: 'Игроки', path: '/players' },
    { name: 'Виды спорта', path: '/' },
]

function MainMenu({ variant }) {

    const isHeader = variant === 'header';

    const linkStyle = (isActive) => {
        const color = isHeader ? { 'link-dark': !isActive, 'link-secondary': isActive } : 'link-light';
        return cn('nav-link', 'px-2', color);
    }
    const listStyle = () => {
        return cn('list-unstyled', 'col-12', 'col-md-auto', 'mb-2', 'mb-md-0', { 'd-flex': isHeader, 'justify-content-center': isHeader });
    }

    return (
        <nav>
            <ul className={listStyle()}>
                {data.map(elem => (
                    <li key={elem.path}>
                        <NavLink
                            to={elem.path}
                            className={({ isActive }) => linkStyle(isActive)}
                        >
                            {elem.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MainMenu;