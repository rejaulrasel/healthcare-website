import React from 'react';
import AllNews from '../AlNews/AllNews';
import Carousel from '../Carousel/Carousel';
import Community from '../Community/Community';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Community></Community>
            <AllNews></AllNews>
            
        </div>
    );
};

export default Home;