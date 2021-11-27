import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Service = (props) => {
    const{img,title,description,id} = props.service;
    // useEffect( () => {
    //     Aos.init( { duration : 1500 })
    // }, [])
    return (
        <div data-aos='fade-down-right' className='service'>
            <div>
                <img src={img} alt="" />
            </div>
            <h4 className='text-center mt-2'>{title}</h4>
            <h6 className='p-2'>{description.slice(0,250)}</h6>
            <div className='d-flex align-items-end'>
            <Link className='w-100 ' to={`/services/${id}`}><button >Read More</button></Link>
        </div>
        </div>
    );
};
export default Service;