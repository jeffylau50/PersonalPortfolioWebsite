import React, { useContext, useState, useRef } from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <pre>
        <div className="headerCSS">
        <div className="textClass">
        <br />

          Jeffy Lau, PMP 
          <br/>
          <br/>

          Software Engineer & 
          <br/>
          <br />
          Project Manager
          
          <span className="cursor ml-2"></span>
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
  <div class="col-sm-12 col-md-12  col-lg-12 col-xl-4"><a target="_blank" href='https://drive.google.com/file/d/1xamt3pRYIknBF66Cbxztgb_IkuXH1nnR/view?usp=sharing'><button type='button' className="btn btn-warning buttonCustomCSS12">Resume</button></a></div>
  <div class="col-sm-12 col-md-12  col-lg-12 col-xl-4"><a target='_blank' href='https://www.linkedin.com/in/jeffy-l-962487109/'>
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



