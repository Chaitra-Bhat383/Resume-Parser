import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <div >
        <div className = "Navigation" >
        <span className = "navtext" ><a style={{textDecoration:"none",color:"black"}} href="https://github.com/Chaitra-Bhat383/Resume-Parser"> RESUME PARSER </a></span> 
        <div className = "fourth" >
        <NavLink to = "/home" style={{textDecoration:"none",color:"black"}}> <span className = "navtext"> HOME </span></NavLink >
        <NavLink to = "/about" style={{textDecoration:"none",color:"black"}} > <span className = "navtext" > ABOUT </span></NavLink >
        <NavLink to = "/stats" style={{textDecoration:"none",color:"black"}} > <span className = "navtext" > STATS </span></NavLink >
        </div> 
        </div>           
        </div>
    )
}

export default Navbar
