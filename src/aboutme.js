import React, { useContext, useState, useRef } from "react";
import "./aboutme.css";

function Aboutme() {
  return (
    <div id='aboutme'>
      <div class="jumbotron jourDiv">
        <h1 class="display-4">My Journey in Tech</h1>

        <hr class="my-4" />
        <h5 className="textCSSclass">
          My very first encouter with programming/coding was when I enrolled
          into a 2 months Coding Boot Camp/Course in Hong Kong that I took
          because of boredom during the summer break of sophomore year in
          college. After that, I started doing some freelance web development
          work on the side to make some extra cash while studying in school.
          After graduating college, I tried to pursuit careers in other fields
          but ended up decided that the IT industry is where my passion is.
        </h5>
        <div className="container-fluid greyCSS">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="https://res.cloudinary.com/djgjwxdih/image/upload/v1650360665/portfolio/278856843_4454173264684215_4155848062265952274_n_zckoxi.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://res.cloudinary.com/djgjwxdih/image/upload/v1650360664/portfolio/278682438_4454173244684217_7037711612665934710_n_jmiwpd.jpg"
                      alt="Second slide"
                    />
                  </div>
                  
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <br />
              <h1 className='customh1'>Outside of Tech</h1>
              <h5 className="textCSSclass2">Aside from being a developer, I am also a Pilot and an outdoor activities lover.
              When I am not coding, I am usually out snowboarding/skiing, flying, kayaking, mountain biking, hiking, riding motorcycle, etc.
              In addition, I am also a really huge fan of Marvel movies. My favourite Marvel superhero is Captain America.
              My favourite city is Los Angeles which also happens to be the county I am currently living in. </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
