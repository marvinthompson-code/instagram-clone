import React from "react";
import Login from "../Login/Login";
import "../../css/Home.css";
import { NavLink } from "react-router-dom";
import instagramSlide1 from "../../css/images/instaslide1.jpg";
import instagramSlide2 from "../../css/images/instaslide2.jpg";
import instagramSlide3 from "../../css/images/instaslide3.jpg";

const Home = () => {
  return (
    <div className="container homeContainer">
      <div className="row">
        <div className="col imageColumn">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide screenshotCarousel"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 screenshotCarouselImg"
                  src={instagramSlide1}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 screenshotCarouselImg"
                  src={instagramSlide2}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 screenshotCarouselImg"
                  src={instagramSlide3}
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col loginColumn">
          <Login />
          <br></br>
          <div className="jumbotron pitchJumbo">
            <small id="emailHelp" className="form-text text-muted nam">
              Don't have an account? <span></span>
              <NavLink exact to={"/signup"}>
                Sign Up
              </NavLink>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
