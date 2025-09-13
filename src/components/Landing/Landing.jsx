import React from 'react'
import './Landing.css'
import {content } from '../../data.js'
import img from "../../assets/software-developer.png";

const Landing = () => {
  return (
    <section className="landing">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="landing-left">
        <h1 className="typing">Hi! I’m Ateeb</h1>

        <p>Frontend Developer | React | Web Designer</p>
        <p>{content[0].about}</p>
        <div className='button-container'>
          <a href="#" className="btn">Explore My Work</a>
          <a href="#" className="btn">Download Resume</a>
        </div>
      </div>
      <div className="landing-right">
        <img src={img} alt="Ateeb"/>
      </div>
    </section>
  )
}

export default Landing
