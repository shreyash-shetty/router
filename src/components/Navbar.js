import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <header>
            <div className='navbar'>
                
                    <NavLink to="/" >Home</NavLink >
                    <NavLink  to="/about" >About</NavLink >  
                    {/* style={({ isActive }) => ({ color: isActive? "greenyellow" : "white", })} */}
                
               
            </div>
            </header>



        </>
    )
}
