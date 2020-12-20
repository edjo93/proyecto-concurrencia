import React from 'react'
import { Carousel } from 'react-bootstrap';

function Home() {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://hdwallsource.com/img/2019/5/spotify-discover-weekly-wallpaper-68952-71298-hd-wallpapers.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.awwwards.com/awards/sites_of_the_day/2016/07/awwwards-sotd-Inside-Discovery-1.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://miro.medium.com/max/3200/1*yj69AyiFSTypyEwioVGjkw.jpeg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        // <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        //     <div class="carousel-inner">
        //         <div class="carousel-item active">
        //             <img class="d-block w-100"  alt="First slide" />
        //         </div>
        //         <div class="carousel-item">
        //             <img class="d-block w-100"  alt="Second slide" />
        //         </div>
        //         <div class="carousel-item">
        //             <img class="d-block w-100"  alt="Third slide" />
        //         </div>
        //     </div>
        //     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Previous</span>
        //     </a>
        //     <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Next</span>
        //     </a>
        // </div>
    )
}

export default Home;