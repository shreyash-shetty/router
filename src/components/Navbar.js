import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <header>
            <div className='navbar'>
                
                    <NavLink to="/" style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}>Home</NavLink >
                    <NavLink  to="/about" style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}>About</NavLink >
                
               
            </div>
            </header>



        </>
    )
}
