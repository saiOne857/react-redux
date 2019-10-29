import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Style from './header.css';

const Header = (props) => <div className={Style.header}>
    <ul>
        <li>
            <NavLink exact activeClassName={Style.active} to="/">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink exact activeClassName={Style.active} to="/about">
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink exact activeClassName={Style.active} to="/contactus">
                Contact Us
            </NavLink>
        </li>
    </ul>
</div>

export default Header;