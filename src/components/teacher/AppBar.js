import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/teacher.scss'

const AppBar = () => {
    return (
        <div>
            <div className="appbar">

                <NavLink to="/teacher/home" className="appbar-nav" activeClassName="appbar-nav-active">Classes</NavLink>
                <NavLink to="/teacher/newclass" className="appbar-nav" activeClassName="appbar-nav-active">Create New Class</NavLink>
                <NavLink to="/teacher/joinclass" className="appbar-nav" activeClassName="appbar-nav-active">Join Class</NavLink>
                <NavLink to="/teacher/profile" className="appbar-nav" activeClassName="appbar-nav-active">Profile</NavLink>
                <NavLink to="/teacher/settings" className="appbar-nav" activeClassName="appbar-nav-active">Settings</NavLink>

            </div>
        </div>
    );
}

export default AppBar