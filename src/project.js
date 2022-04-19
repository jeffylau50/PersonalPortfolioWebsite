import React, { useContext, useState, useRef } from "react";
import './project.css'

function Project() {
    return(
    <div className="projectDiv">
     <h1 className="projectMaintitle mt-5">My Projects</h1>
     <div className="container">

         <div className="row customProject1">
             <div class='col'>
             <img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650348331/portfolio/gif/EAPCdemo_gifhub.gif'/>
             </div>
             <div class='col'>
             <h3>Explore America | Travel Website</h3>
             <p>Full Stack Online Chat App built with React.js and Firebase</p>
             <h5>Main Feature:</h5>
             <p>Full Authentication System, Cluster Map/ Mini Map, Review System, Image Upload, Edit and Delete</p>
             <h5>Tech Used:</h5>
             <p>Front End: HTML, CSS, Bootstrap, Javascript, EJS Templating Engine</p>
              <p>Back End: Node.js, Express.js, MongoDB</p>
              <p>Deployment: Heroku</p>
              <button className="btn btn-info">View Code</button>
              <button className="btn btn-warning ml-3">Live Demo</button>
             </div>
             </div>
             <br/>

<hr/>
             <br/>
             <div className="row mt-5">
             <div class='col'>
             <h3>Orange Chat | Online Chat App</h3>
             <p>Full Stack Online Chat App built with React.js and Firebase deployed on Heroku</p>
             <h5>Main Feature:</h5>
             <p>Real Time Messaging, Authentication System, Google Login, Icon and Display Name Feature, Emoji Picker, Multipe Chat Rooms</p>
             <h5>Tech Used:</h5>
             <p>Front End: HTML, CSS, Bootstrap, Javascript, React.js</p>
              <p>Back End: Firebase</p>
              <p>Deployment: Heroku</p>
              <button className="btn btn-info">View Code</button>
              <button className="btn btn-warning ml-3">Live Demo</button>
             </div>

             <div class='col'>
            <img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650351106/portfolio/gif/pcDemo1_mngtii.gif'/>

                 </div>

         </div>
         <br/>     

         <hr/>
         <div className="row mt-5">
         <div class='col thirdrowText'>
         <h2>Responsive Mobile Design</h2>
         <br/>
         <h5>Although both of these projects were mainly developed for the desktop web platform, mobile adaptability was also one of the main focus of these projects. 
             Therefore, Responsive design was used in both projects. Both application should work on most mobile devices as shown below (iPhone 11 Demo)</h5>
             <br/>
         </div>
         </div>

         <div className="row">
             <div className='col'>
             <img className='mobileGif' src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650352518/portfolio/gif/EAmobilecompress_s3bwle.gif'></img>
             </div>
             <div className='col'>
             <img className='mobileGif' src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650352746/portfolio/gif/mobileDemo1_qdzlat.gif'></img>
             </div>
             <div className='col'>
             <img className='mobileGif' src='https://res.cloudinary.com/djgjwxdih/image/upload/v1650352909/portfolio/gif/ezgif.com-gif-maker_3_l1wsjh.gif'></img>
             </div>

         </div>
         <br/>

         <hr/>

     </div>
     <br/>
     <br/>
     <br/>
     <br/>

     </div>
    )
}

export default Project;