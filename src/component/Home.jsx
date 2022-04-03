import React from "react";
import Products from "./products"


const Home = () => {
  return (
    <div>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="../assets/AA6.jpg" className="d-block w-100" alt="female Fashion" height="500px"/>
            </div>
            <div className="carousel-item">
            <img src="../assets/AA2.jpg" className="d-block w-100" alt="Male Fashion" height="500px"/>
            </div>
            <div className="carousel-item">
            <img src="../assets/AA20.jpg" className="d-block w-100" alt="Jewelry" height="500px"/>
            </div>
            <div className="carousel-item">
            <img src="../assets/AA12.jpg" className="d-block w-100" alt="PowerBank" height="500px"/>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
            NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
            </p>
        </div>
        </div> 
        </div>
        <Products/>
        </div>
);
};

export default Home


      
