import React, { useEffect, useState } from 'react';
import './SingleServiceDetail.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import './SingleServiceDetail.css'
const SingleServiceDetail = () => { 
    const {serviceId} = useParams();
    const {services} = useServices();
    const [singleService, setSingleService] = useState({});
    console.log(singleService);
    // const {title,img, needed, description,reasons} = singleService;
    useEffect( () => {
        const foundService = services.find(service => service.id = serviceId)
        setSingleService(foundService)
    },[services,serviceId])
    return (
        <div className='single-service'>
            <div className='name-img-part'>
                <img src={singleService?.img} alt="" />
                <div className='ms-md-4'>
                <h2 className='text-danger'>{singleService?.title}</h2>
                <h6>Reasons</h6>
                <p>{singleService?.reasons}</p>
                </div>
            </div>
           <h6 className='mt-3'>Description</h6>
           <p>{singleService?.description}</p>
           <h6 className='mt-5'>Why get tested?</h6>
           <p>{singleService?.needed}</p>
           <Link to='/home'>Back to home page?</Link>
        </div>
    );
};

export default SingleServiceDetail;