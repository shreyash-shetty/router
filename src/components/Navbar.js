import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <header>
            <div className='navbar'>
                
                    <Link to="/home" >Home</Link >
                    <Link  to="/about">About</Link >
                
               
            </div>
            </header>



        </>
    )
}
