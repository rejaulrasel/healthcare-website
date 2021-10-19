import React from 'react';
import AllNews from '../AlNews/AllNews';
import Carousel from '../Carousel/Carousel';
import Community from '../Community/Community';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Community></Community>
            <AllNews></AllNews>
            
        </div>
    );
};

export default Home;