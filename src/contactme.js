import React, { useContext, useState, useRef } from "react";
import './contactme.css'

function Contactme(){

    return(
    <div className='textCSS mt-5'>
        <h1 className="mb-3">Contact Me</h1>
        <h5>Email: jeffylau50@gmail.com</h5>
        <h5>Phone: +1(410)-603-0516</h5>
        <span className='headerLink'>
          <a target="_blank" href='https://github.com/jeffylau50'><img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650325167/portfolio/pinpng.com-github-logo-png-945585_a2yupe.png' className='btn githubButton'/></a>
          <button type='button' className="buttonCSS">🗎<b>RESUME</b></button>
          <img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650326415/portfolio/LinkedIn-Logo.wine_coqaog.png' 
          className='btn linkedinButton'/>
          </span>       
    </div>
    )
}

export default Contactme;