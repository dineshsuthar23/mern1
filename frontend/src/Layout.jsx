import React from 'react'
import Navbar from './components/Navbar'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout
