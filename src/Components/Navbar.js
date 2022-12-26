import React from "react";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid navmain">
        <div className="navleft">
          <div className="logo">
            <img src="./images1/logo.png" alt="" />
          </div>
        </div>
        <div className="navmid">
          <h1>
            <span id="firsth">W</span>ONDER <span id="firsth">R</span>ISING{" "}
            <span id="firsth">K</span>IDS <span id="firsth">S</span>CHOOL
          </h1>
          <p>Learning today. Leading tomorrow. Inspired Forever.</p>
        </div>
        <div className="navright">
          <div className="socialmedia">
            <a
              href="https://www.facebook.com/palakkhilwani1234?mibextid=ZbWKwL"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <i className="ri-facebook-fill"></i>
            </a>

            <a
              href="https://www.instagram.com/invites/contact/?i=veqhcn8fe7kj&utm_content=66yjwc2"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://youtube.com/@wonderrisingkidsschool2545"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <i className="ri-youtube-line"></i>
            </a>
            
          </div>
          <div className="seacrch">
            <input className="aa" type="search" />
            <div className="btn" style={{ backgroundColor: "#F8D34D" }}>
              Search
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
