import React from 'react';
import { Link } from 'react-router-dom';
import Style from './header.css';

const Header = (props) => <div>
    <ul>
        <li>
            <Link exact activeClassName="active" to="/">
                Home
            </Link>
        </li>
        <li>
            <Link exact activeClassName="active" to="/">
                Users
            </Link>
        </li>
        <li>
            <Link exact activeClassName="active" to="/">
                About Us
            </Link>
        </li>
        <li>
            <Link exact activeClassName="active" to="/">
                Contact Us
            </Link>
        </li>
    </ul>
</div>

export default Header;