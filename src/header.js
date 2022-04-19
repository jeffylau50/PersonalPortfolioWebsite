import React, { useContext, useState, useRef } from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <pre>
        <div className="headerCSS">
        <div className="textClass">
        <br />

          Jeffy Lau 
          <br/>
          <br/>

          Software Engineer/ Web Developer
          <br />
          <br />
        
          <span class="cursor"></span>
          </ div>
          <br />
          <span className='headerLink'>
          <a href='https://github.com/jeffylau50'><img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650325167/portfolio/pinpng.com-github-logo-png-945585_a2yupe.png' className='btn githubButton'/></a>
          <button type='button' className="buttonCSS">🗎<b>RESUME</b></button>
          <img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650326415/portfolio/LinkedIn-Logo.wine_coqaog.png' 
          className='btn linkedinButton'/>
          </span>
        </div>
      </pre>
    </div>
  );
}

export default Header;
