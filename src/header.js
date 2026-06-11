import React from "react";
import "./header.css";
import LaptopCanvas from "./components/canvas/Laptop";

function Header() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-canvas">
        <LaptopCanvas />
      </div>

      <div className="hero-content">
        <div className="headerCSS">
          <div className="textClass">
            <br />
            Jeffy Lau, PMP
            <br />
            <br />
            Software Engineer &
            <br />
            <br />
            Project Manager
            <span className="cursor ml-2"></span>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                <a target="_blank" rel="noreferrer" href="https://github.com/jeffylau50">
                  <button className="btn btn-danger buttonCustomCSS12">GitHub</button>
                </a>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1xamt3pRYIknBF66Cbxztgb_IkuXH1nnR/view?usp=sharing"
                >
                  <button type="button" className="btn btn-warning buttonCustomCSS12">
                    Resume
                  </button>
                </a>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/jeffy-l-962487109/"
                >
                  <button className="btn btn-info buttonCustomCSS12">LinkedIn</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
