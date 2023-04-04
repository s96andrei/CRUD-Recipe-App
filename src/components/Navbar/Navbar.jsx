import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./Navbar.css";
import Logo from "../../logo.svg";

const Navbar = () => {
    return (
        <div>
           <div className='navbar-container'>
            <nav>
                <div className='navbar-design'>
                    <img width={50} src={Logo} alt=""/>
                    <ul className='navbar-list'>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`recipes`}>Recipes</Link></li>
                        <li><Link to={`favorite-recipes`}>My Recipes</Link></li>
                    </ul>
                </div>
            </nav>
        </div> 
        <Outlet />
        </div>
        
    )
}

export default Navbar                                 