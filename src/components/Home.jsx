import React from 'react'
import Nav from "./Nav";
import vg from "../assets/sumit.png";


import "../styles/nav.css";
import "../styles/home.css";

const Home = () => {
  return (
    <>
        <Nav />
        <div className="herons">
            <div className="image"></div>
            <div className="section">
                <img src={vg} alt="" className="sumit" />
                <h1>I'm Sumit</h1>
                <p>This is my first React Project.</p>
            </div>
        </div>
    </>    

  )
}

export default Home;