import React from "react";
import "./css/BannerS.css";
import "./css/LatestNews.css";
import "./css/Admission.css";
import "./css/HlastSection.css";
import { NavLink } from "react-router-dom";


const BannerSection = () => {
  return (
    <>
      <div className="container-fluid p-0"  >
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
              {/* <div className="carousel-caption d-none d-md-block">
                <h1>
                  <b>Wonder Rising Kids School</b>
                </h1>
                <p>
                  <b>
                    Embracing state-of-the-art technology in our classrooms
                    allows Wonder Rising Kids School to facilitate 21st
                    century teaching and learning for its teachers and students.
                  </b>
                </p>
              </div> */}
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

      {/* Latest New Section---------------------- */}
    
      <div className="container-fluid p-0">
        <h1 className="heading1 ada">Facilities</h1>

        <div className="container-fluid px-5 d-flex latest_card_box">
          <div className="lnewsleft p-3">
            <div className="card_img1">
              <img src="./images1/acad.jpeg" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3 ak">Good Academic</h3>
              <p>
              We believe that every child is Unique and has a different learning approach. We, at Wonder Rising Kids School, observe the talents and qualities and focus on them for educating the child....
              </p>
            </div>
          </div>
          <div className="lnewsmid p-3">
            <div className="card_img1">
              <img src="./images1/staff.jpeg" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3 ak">Skilled Staff</h3>
              <p>
                Skilled Staff is here to teach or guide for your bright carrier
                and  provides Problem Solving, Decision Making  in our School. Teachers play a key role
                in identifying and supporting students...
          
              </p>
            </div>
          </div>
          <div className="lnewsright p-3">
            <div className="card_img1">
              <img src="./images1/sport.jpg" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3 ak">Sports</h3>
              <p>
                The Wonder Rising Kids School won the Many Award! Remember
                how hard our school worked together on physical activity,
                healthy eating, and mental. Specialy Focus on Education and
                Sports.
              </p>
            </div>
          </div>
        </div>

        <div className="latestbutton p-2">
          <NavLink className="btn btn-lg kop viewbtn" to="/facilities">
            View all New
          </NavLink>
        </div>
      </div>

      {/* Admission Section ---------- */}

      <div className="container-fluid mt-3 p-0">
        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="ladmleft p-5 text-center">
            <div className="title">
              <h1 className="my-3 lnns">
                Our <span style={{ color: "yellow" }}>School</span>
              </h1>
              <p>
              Wonder Rising Kids School provides an Best learning
                environment with a commitment of using modern day teaching
                pedagogy to cultivate an advanced and comprehensive academic
                program; fully compliant with the curriculum of
                studies. We are a Pre Nursery to 8th class school with a wide array of resources
                designed to foster student achievement that will prepare our
                pupils to pursue higher education and be competitive in their
                careers.
              </p>
            </div>
            <div className="readbutton p-2">
              <NavLink className="btn btn-lg bg-warning adm" to="/ourschool">
                Read More
              </NavLink>
            </div>
          </div>

          <div className="ladmright p-5 text-center">
            <div className="title">
              <h1 className="my-3 lnns">
                <span style={{ color: "yellow" }}>
                Wonder Rising Kids School{" "}
                </span>
                Admission
              </h1>
              <p className="mt-3">
                The Wonder Rising Kids School gives a fair and equal chance
                to all applicants who fulfill the admission requirements;
                dependent upon space availability. To determine admission
                eligibility for students transferring from another school,
                official report cards as well as other supporting documents are
                submitted upon application.
              </p>
            </div>
            <div className="readbutton p-2">
              <NavLink
                className="btn btn-lg bg-warning adm mt-3"
                to="/academicprocedure"
              >
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Home LAst Section ------------ */}

      <div className="container-fluid p-0">
        <div className="container-fluid p-0  d-flex latest_card_box_hls">
          <div className="hlsleft">
            <div className="ccc1_img">
              <img src="./images1/h1.jpg" alt="" />
            </div>
            <div className="ccc2_img">
              <img src="./images1/h2.jpg" alt="" />
            </div>
          </div>
          <div className="hlsmid text-center p-5">
            <div className="card_imgl my-5">
              <img src="./images1/logo.png" alt="" />
            </div>
            <div className="title1 my-5">
              <div className="hlstbutton1">
                <NavLink
                  className="btn btn-lg kop kophl text-nowrap"
                  to="/gallery"
                  style={{ backgroundColor: "#2E63B1", color: "white" }}
                >
                  Student Life
                </NavLink>
                <NavLink
                  className="btn btn-lg kop  kophl text-nowrap"
                  to="/academicprocedure"
                  style={{ backgroundColor: "#1D4776", color: "white" }}
                >
                  Admission
                </NavLink>
              </div>
            </div>

            <p>
              At the Wonder Rising Kids School, we believe in giving our
              students a voice and instilling in them a passion to be involved
              with their school community. It is evident that students are at
              the forefront of understanding the needs of making their school
              into an environment that promotes a safe and healthy learning
              environment. For this reason, Wonder Rising Kids School is
              committed in providing a well balanced spiritual, academic and
              social well-being experience for it’s students. Students are
              encouraged to hone their talents in order to serve and participate
              in and beyond our community.
            </p>
            <div className="title1">
              <div className="hlstbutton">
                <NavLink
                  className="btn btn-lg hls px-4 py-3"
                  to="/facilities"
                  style={{ backgroundColor: "#2E63B1", color: "white" }}
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hlsright">
            <div className="ccc2_img">
              <img src="./images1/h3.jpg" alt="" />
            </div>
            <div className="ccc1_img">
              <img src="./images1/h4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
