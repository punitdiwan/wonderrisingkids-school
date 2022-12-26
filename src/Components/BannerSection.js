import React from "react";
import "./css/BannerS.css";
import "./css/LatestNews.css";
import "./css/Admission.css";
import "./css/HlastSection.css";

const BannerSection = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                className="d-block slideimage"
                src="./images1/slide1.png"
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h1>
                  <b>Hogwarts International School</b>
                </h1>
                <p>
                  <b>
                    HIS to facilitate 21st century teaching and learning for its
                    teachers and students.
                  </b>
                </p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block slideimage"
                src="./images1/slide2.png"
                alt="Second slide"
              />
           
            </div>
            <div className="carousel-item">
              <img
                className="d-block slideimage"
                src="./images1/slide3.png"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block slideimage"
                src="./images1/slide4.png"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block slideimage"
                src="./images1/slide5.png"
                alt="Third slide"
              />
            </div>
            {/* <div className="carousel-item">
              <img
                className="d-block slideimage"
                src="./images1/slide6.png"
                alt="Third slide"
              />
            </div> */}
           
          
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon jj"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon jj"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
