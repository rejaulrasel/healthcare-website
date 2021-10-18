import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
const hospitalIcon = <FontAwesomeIcon icon={faHospitalUser} />
const phoneIcon = <FontAwesomeIcon icon={faPhone} />
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />
const Footer = () => {
    return (
        <div className='bg-primary text-light'>
        <div className='container'>
        <div className='footer-section'>
        <div className='me-5 mt-5'>
            <div className='d-flex '>
                <span className='footer-icon me-3'>{hospitalIcon}</span>
                <div>
                    <h1>Molecular</h1>
                    <h4>Diagnosis</h4>
                </div>
            </div>
            <p className='fs-5'>
                Box 3233
                <br />
                1810 Kings Way
                <br />
                King Street, 5th Avenue, New York
                </p>
                <div className='d-flex fs-5'>
                    <span>{phoneIcon}</span>
                    <p className='ms-3'>+6487628790</p>
                </div>
                <div className='d-flex fs-5'>
                    <span>{emailIcon}</span>
                    <p className='ms-3'>rejaulhasanrasel28@gmail.com</p>
                </div>
        </div>
        <div className='mx-md-5 mt-5'>
            <h2 className=''>About Us</h2>
                <div className='fs-5'>
                <p>{arrowIcon} Our mission and Vakues</p>
                <p>{arrowIcon} Leadership</p>
                <p>{arrowIcon} Transformation</p>
                <p>{arrowIcon} Awards</p>
                <p>{arrowIcon} Diversity is Our Specialty</p>
                <p>{arrowIcon} Policies & Procedures</p>
                </div>
        </div>
        <div className='mt-5 ms-md-5'>
            <h3>Hospital Hours</h3>
            <div className='d-flex justify-content-between'>
                <p>Monday - Friday</p>
                <p>08:00 - 20:00</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Sunday</p>
                <p>10:00 - 18:00</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Saturday</p>
                <p>09:00 - 18:00</p>
            </div>
            <div></div>
            <div></div>
        </div>
        </div>
        <p className='text-center mt-3 p-0'>© 2021 Molecular Diagnosis. All rights reserved. | Website by Healthcare Success | Privacy Policy | Sitemap</p>
        </div>
    </div>
    );
};

export default Footer;