import React from "react";
import { Link } from 'react-scroll';

import './contactme.css'

function Contactme(){

    return(
    <div className='textCSS mt-5' id='contactme'>
        <h1 className="mb-3">Contact Info</h1>
        <h5>Email: jeffylau50@gmail.com</h5>
        <h5 className="mb-4">Phone: +1(410)-603-0516</h5>
        <span>
          <a target="_blank" href='https://github.com/jeffylau50'><img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650325167/portfolio/pinpng.com-github-logo-png-945585_a2yupe.png' className='btn githubButton1'/></a>
          <button type='button' className="buttonCSS1">🗎<b>RESUME</b></button>
          <a target='_blank' href='https://linkedin.com/in/jeffy-lau-962487109'><img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650326415/portfolio/LinkedIn-Logo.wine_coqaog.png' 
          className='btn linkedinButton1'/></a>
          </span>
          <br />
          <Link class="nav-link" to="top" smooth={true} duration={1000} ><button className="btn btn-danger mb-5">Back to Top</button></Link>       
    </div>
    )
}

export default Contactme;