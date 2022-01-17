import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function NavBar() {



    return (
        <nav>
            <NavLink
                to="/"
                // style={({ isActive }) => {
                //     return isActive ? {color:'red'}:{color:'violet'}

                // }}
                className={({ isActive }) => isActive ? "activeLink" : ""}
            >Accueil</NavLink>

            <NavLink to='/services'

                className={({ isActive }) => isActive ? "activeLink" : ""}
            >Services</NavLink>

            <NavLink to='/contact'

                className={({ isActive }) => isActive ? "activeLink" : ""}
            >Contact</NavLink>
        </nav>
    )
}
