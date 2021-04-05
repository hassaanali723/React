import React from "react";
import Navbar from './Navbar.js';
import Herosection from './Herosection.js';
import './style.css';


const Webpage = () => {
    return(
        <div className='home'>
            <Navbar />
            <Herosection />

        </div>
    )
}

export default Webpage;