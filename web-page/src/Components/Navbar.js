import React from "react";
import './style.css';


const Navbar = () => {
    return(
        <div className='nav'>
            <div className='nav-left'>
                <div className='logo'></div>
                <h2>React Solutions</h2>
            </div>
            <div className='nav-right'>
                <ul className='nav-list'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar;