import React from 'react';
import './Carousel.css';
import carousel1 from './images/c(1).jpg';
import carousel2 from './images/c(2).jpg';
import carousel3 from './images/c(3).jpg';
import carousel4 from './images/c(4).jpg';
import carousel5 from './images/c(5).jpg';
const Carousel = () => {
    return (
        <div>
            {/* banner */}
            <section >
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carousel1} className="d-block w-100" height='580px' alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel2} className="d-block w-100" height='580px' alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel3} className="d-block w-100" height='580px' alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel4} className="d-block w-100" height='580px' alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel5} className="d-block w-100" height='580px' alt="..." />
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div> */}
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>

        </div>
    );
};
export default Carousel;