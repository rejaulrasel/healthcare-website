import React from 'react';
import { Link } from 'react-router-dom';
import './News.css'
const News = (props) => {
    const { img, title, author } = props.news
    return (
        <div className='d-flex news'>
            <div>
                <img src={img} width='220px' height='120px' alt="" />
            </div>
            <div className='ms-md-3 w-50 mx-auto'>
                <h4>{title}</h4>
                <p>{author}</p>
            </div>

        </div>
    );
};

export default News;