import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'

const navIcon = <FontAwesomeIcon icon={faHospitalUser} />
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <h2 className='text-primary'>{navIcon} <span className='ms-1'>Molecular Diagnosis</span> </h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse  navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='services'>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about'>About Us</Link>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link" href="#watch">Watch</a>
                        </li> */}
                            <li className="nav-item">
                                <Link to='/appointment'>Appointment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login'>Log In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;