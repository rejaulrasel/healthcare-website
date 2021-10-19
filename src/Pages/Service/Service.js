import React from 'react';
import './Service.css'

const Service = (props) => {
    const{img,title,description} = props.service;
    console.log((title));
    return (
        <div className='service'>
            <div>
                <img src={img} alt="" />
            </div>
            <h4 className='text-center my-3'>{title}</h4>
            <p>{description.slice(0,300)}</p>
            {/* <button className='btn-regular'>View More</button> */}
        </div>
    );
};
export default Service;