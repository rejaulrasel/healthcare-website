import React from 'react';
import './News.css'
const News = (props) => {
   const {img, title, author} = props.news
    return (
        <div className='d-flex'>
            <div>
                <img src={img} width='220px' height='120px' alt="" />
            </div>
            <div className='ms-3'>
                <h4>{title}</h4>
                <p>{author}</p>
            </div>
            
        </div>
    );
};

export default News;