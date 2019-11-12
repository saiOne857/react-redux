import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Style from './header.css';
import { connect } from 'react-redux';

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
        <li>
            <NavLink exact activeClassName={Style.active} to="/todoApp">
                App
            </NavLink>
        </li>
    </ul>
    <div className={Style.user}>
        {
            props.user ? <span>
                    {props.user}, <span onClick={() => props.logout()}> Logout </span>
                </span> : <NavLink exact activeClassName={Style.active} to="/login">
                    Login
                </NavLink>
        }
    </div>
</div>

const mapStateToProps = (state) => {
    return {
        user: state.user.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout : () => {
            dispatch({
                type: 'LOGOUT'
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);