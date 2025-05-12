import React, { useContext, useState, useRef } from "react";
import "./project.css";

function Project() {
  return (
    <div className="projectDiv" id="project">
      <h1 className="projectMaintitle mt-5">My Projects</h1>
      <div className="container">
        <div className="row customProject1">
          <div class="col">
            <img
              className="PCgif"
              src="https://res.cloudinary.com/djgjwxdih/image/upload/v1650348331/portfolio/gif/EAPCdemo_gifhub.gif"
            />
          </div>
          <div class="col">
            <h3>Explore America | Travel Website</h3>
            <p>Full Stack Travel Website built with EJS, Node.js & MongoDB</p>
            <h5>Main Feature:</h5>
            <p>
              Full Authentication System, Cluster Map/ Mini Map, Review System,
              Image Upload, Edit and Delete
            </p>
            <h5>Tech Used:</h5>
            <p>
              Front End: HTML, CSS, Bootstrap, Javascript, EJS Templating Engine
            </p>
            <p>Back End: Node.js, Express.js, MongoDB</p>
            <p>Deployment: Render</p>
            <a
              target="_blank"
              href="https://github.com/jeffylau50/ExploreAmericaWebsite"
            >
              <button className="btn btn-info">View Code</button>
            </a>
            {/*<a
              target="_blank"
              href="https://frozen-anchorage-09220.herokuapp.com/"
            >
              <button className="btn btn-warning ml-3">Live Demo</button>
            </a>*/}
            <br />
            <br />
            *Please note that the live demo link will need about 10 seconds of
            load time to wake up since free HeroKu hosting services put app to
            sleep after 30 mins of inactivity.
          </div>
        </div>
        <br />

        <hr />
        <br />
        <div className="row mt-5">
          <div class="col">
            <img
              className="PCgif"
              src="https://res.cloudinary.com/djgjwxdih/image/upload/v1650351106/portfolio/gif/pcDemo1_mngtii.gif"
            />
          </div>
          <div class="col">
            <h3>Orange Chat | Online Chat App</h3>
            <p>
              Full Stack Online Chat App built with React.js and Firebase
              deployed on Heroku
            </p>
            <h5>Main Feature:</h5>
            <p>
              Real Time Messaging, Authentication System, Google Login, Icon and
              Display Name Feature, Emoji Picker, Multiple Chat Rooms
            </p>
            <h5>Tech Used:</h5>
            <p>Front End: HTML, CSS, Bootstrap, Javascript, React.js</p>
            <p>Back End: Firebase</p>
            <p>Deployment: Render</p>
            <a
              target="_blank"
              href="https://github.com/jeffylau50/OnlineChatApp"
            >
              <button className="btn btn-primary">View Code</button>
            </a>
            <a target="_blank" href="https://onlinechatapp-2sli.onrender.com">
              <button className="btn btn-danger ml-3">Live Demo</button>
            </a>
          </div>
        </div>
        <br />
        <hr />

        <div className="row mt-5">
          <div class="col">
            <img
              className="PCgif"
              src="https://res.cloudinary.com/djgjwxdih/image/upload/v1650353438/portfolio/gif/pcDemo_fgonj8.gif"
            />
          </div>
          <div class="col">
            <h3>Lights Out | Web Game</h3>
            <p>Web Game built with React.js</p>
            <b>Goal of the game is to turn off all the lights on the panel</b>
            <br /> <br />
            <h5>Main Feature:</h5>
            <p>Multipe Difficulty Setting, Move Counter</p>
            <h5>Tech Used:</h5>
            <p>Front End: HTML, CSS, Javascript, React.js</p>
            <p>Deployment: Render</p>
            <a
              target="_blank"
              href="https://github.com/jeffylau50/LightsOutGame"
            >
              <button className="btn btn-success">View Code</button>
            </a>
            <a target="_blank" href="https://lightsoutgame.onrender.com/">
              <button className="btn btn-primary ml-3">Live Demo</button>
            </a>
          </div>
        </div>
        <br />

        <hr />

        <div className="row mt-5">
          <div class="col thirdrowText">
            <h2>Responsive Mobile Design</h2>
            <br />
            <h5>
              Although both Explore America and Orange Chat were mainly
              developed for the desktop web platform, mobile adaptability was
              also one of the main focus of these projects. Therefore,
              Responsive design was used in both projects. Both application
              should work on most mobile devices as shown below (iPhone 11 Demo)
            </h5>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img
              className="mobileGif"
              src="https://res.cloudinary.com/djgjwxdih/image/upload/v1650352518/portfolio/gif/EAmobilecompress_s3bwle.gif"
            ></img>
          </div>
          <div className="col">
            <img
              className="mobileGif"
              src="https://res.cloudinary.com/djgjwxdih/image/upload/v1650352746/portfolio/gif/mobileDemo1_qdzlat.gif"
            ></img>
          </div>
          <div className="col">
            <img
              className="mobileGif"
              src="https://res.cloudinary.com/djgjwxdih/image/upload/v1650352909/portfolio/gif/ezgif.com-gif-maker_3_l1wsjh.gif"
            ></img>
          </div>
        </div>
        <br />

        <hr />
      </div>
    </div>
  );
}

export default Project;
