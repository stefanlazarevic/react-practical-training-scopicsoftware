import React from 'react';
import style from '../sass/Header.sass';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="navigation__main">
                <ul className="navigation-main__list">
                    <li className="navigation-main-list__item">
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li className="navigation-main-list__item">
                        <NavLink to="/posts">Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
