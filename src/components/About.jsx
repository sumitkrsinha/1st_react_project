import React from 'react'
import Nav from "./Nav";
import vg from "../assets/sumit.png";

import "../styles/nav.css";
import "../styles/about.css";

const About = () => {
  return (
    <>
        <Nav />
        <div className="about">
            <div className="image"></div>
            <div className="about_section">
                <img src={vg} alt="" className="profile" />
                <p className="about_para">
                    I'm Sumit Kumar Sinha. I belongs to Gaya, Bihar.
                    I'm a recently graduate Computer Science Engineer from O.P. Jindal University, Raigarh.
                    I've Completed my Higher Secondary Education(+2) from Gyan Bharti Public School with 68.2%
                    and Senior Secondary Education(matriculation/10th) from Manav Bharti National School
                    with 8.2 CGPA.
                    <br /><br />
                    I'm skilled with:
                    <ul className='skills'>
                        <li className='listitem'>HTML</li>
                        <li className='listitem'>Python</li>
                        <li className='listitem'>CSS</li>
                        <li className='listitem'>JavaScript</li>
                        <li className='listitem'>React Js.</li>
                        <li className='listitem'>MySQL</li>
                    </ul>
                </p>
            </div>
        </div>
    </>    

  )
}

export default About;