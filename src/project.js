import React, { useContext, useState, useRef } from "react";
import "./project.css";
import FitTextAICarousel from "./components/FitTextAICarousel";

function Project() {
  return (
    <div className="projectDiv" id="project">
      <h1 className="projectMaintitle mt-5">My Projects</h1>
      <div className="container">
        <div className="row customProject1 projectBlock">
          <div class="col">
            <FitTextAICarousel />
          </div>
          <div class="col">
            <h3>FitTextAI | Lazy Calorie Tracker</h3>
            <p>
              AI-powered iOS calorie & macro tracker with a chat-based interface
              built for people who hate traditional food logging
            </p>
            <h5>Main Feature:</h5>
            <p>
              Chat-Based Food Logging, AI Photo Recognition, Conversational
              Portion Corrections, AI Body Fat Analysis, Apple Health Sync, Sign
              in with Apple
            </p>
            <h5>Tech Used:</h5>
            <p>Platform: iOS (React Native, Expo, Nest.JS, NeonDB)</p>
            <p>Integrations: Apple HealthKit, StoreKit, Sign in with Apple</p>
            <p>AI: Food identification, nutrition estimation & body composition analysis</p>
            <p>Deployment: App Store</p>
            <a
              target="_blank"
              href="https://apps.apple.com/eg/app/fittextai-lazy-calorie-tracker/id6760636835"
            >
              <button className="btn btn-dark">App Store</button>
            </a>
          </div>
        </div>
        <br />

        <hr />
        <br />
        <div className="row mt-5 projectBlock">
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
            <a
              target="_blank"
              href="https://exploreamericawebsite.onrender.com"
            >
              <button className="btn btn-warning ml-3">Live Demo</button>
            </a>
            <br />
            <br />
            *Please note that the live demo link will need about 30-40 seconds of
            load time to wake up since free Render hosting services put app to
            sleep after 30 mins of inactivity.
          </div>
        </div>
        <br />

        <hr />
        <br />
        <div className="row mt-5 projectBlock">
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
              deployed on Render
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

        <div className="row mt-5 projectBlock">
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
      </div>
    </div>
  );
}

export default Project;
