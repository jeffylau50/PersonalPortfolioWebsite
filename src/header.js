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
          <div>

<div className="container">
<div className="container">

<div className="container">
<div class="row">
  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4"><a target="_blank" href='https://github.com/jeffylau50'>
  <button className="btn btn-danger buttonCustomCSS12">GitHub</button></a>
</div>
  <div class="col-sm-12 col-md-12  col-lg-12 col-xl-4"><a target="_blank" href='https://drive.google.com/file/d/1VVd7fniJO-wUT-QCOvflRnSrQMVRLaYX/view?usp=sharing'><button type='button' className="btn btn-warning buttonCustomCSS12">Resume</button></a></div>
  <div class="col-sm-12 col-md-12  col-lg-12 col-xl-4"><a target='_blank' href='https://linkedin.com/in/jeffy-lau-962487109'>
  <button className="btn btn-info buttonCustomCSS12">LinkedIn</button></a></div></div>
</div>
</div>
        </div>
        </div>

        </div>

      </pre>
    </div>
  );
}

export default Header;



