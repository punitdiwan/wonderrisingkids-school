import React from 'react'
import "./css/Gallery.css"

const Gallery = () => {
  return (
    <>
    <div className="container-fluid">
    <div className="first">
        
        <div className="one">
            <img src="./images1/g1.jpeg" alt="" />
        </div>
        <div className="one">
            <img src="./images1/g2.jpeg" alt="" />
        </div>
        <div className="one">
            <img src="./images1/g3.jpeg" alt="" />
        </div><div className="one">
            <img src="./images1/g4.jpeg" alt="" />
        </div>
    </div>
        <div className="first">
        
            <div className="one">
                <img src="./images1/g5.jpeg" alt="" />
            </div>
            <div className="one">
                <img src="./images1/g6.jpeg" alt="" />
            </div><div className="one">
                <img src="./images1/g7.jpeg" alt="" />
            </div><div className="one">
                <img src="./images1/g8.jpg" alt="" />
            </div>
        </div>
        <div className="first">
            <div className="one">
                <img src="./images1/g9.jpeg" alt="" />
            </div>
            <div className="one">
                <img src="./images1/g10.jpeg" alt="" />
            </div><div className="one">
                <img src="./images1/g11.jpg" alt="" />
            </div><div className="one">
                <img src="./images1/g12.jpg" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Gallery