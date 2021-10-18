import React, { useEffect } from 'react';
import { useState } from 'react';
import News from '../News/News';
import './AllNews.css'
const AllNews = () => {
    const [allNews, setAllNews] = useState([]);
    useEffect( () => {
        fetch('./AllNews.json')
        .then(res => res.json())
        .then(data => setAllNews(data))
    },[])
    return (
        <div>
            <h1 className='text-center mt-5'>LATEST NEWS</h1>
            <div className='allNews-section container'>
           {
               allNews.map(news => <News
               key={news.id}
               news={news}
               ></News>)
           }
        </div>
        </div>
    );
};

export default AllNews;