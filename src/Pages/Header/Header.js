import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            
            <Link to='/home'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/appointment'>Appointment</Link>
        </div>
    );
};

export default Header;