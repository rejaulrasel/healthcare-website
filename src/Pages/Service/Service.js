import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{img,title,description,id} = props.service;
    return (
        <div className='service'>
            <div>
                <img src={img} alt="" />
            </div>
            <h4 className='text-center my-3 px-5'>{title}</h4>
            <p className='px-5'>{description.slice(0,300)}</p>
            <div className="mx-auto w-100">
            <Link to={`/services/${id}`}><button className='btn-regular px-5'>View More</button></Link>
            </div>
        </div>
    );
};
export default Service;