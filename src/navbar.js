import React, { useContext, useState, useRef } from "react";
import { Link } from 'react-scroll';
import './navbar.css'

function Navbar(props) {

  return (
    <nav id='top' class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link menuLinkCSS" to="top" smooth={true} duration={1000} >
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
            <li class="nav-item">
          <Link class="nav-link menuLinkCSS" to="timeLine" smooth={true} duration={1000} >
              TimeLine<span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link menuLinkCSS" to="project" smooth={true} duration={1000} >
              Projects<span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link menuLinkCSS" to="techstack" smooth={true} duration={1000} >
              Tech Stack <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item menuLinkCSS">
          <Link class="nav-link" to="aboutme" smooth={true} duration={1000} >
              About Me<span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item menuLinkCSS">
          <Link class="nav-link" to="contactme" smooth={true} duration={1000} >
              Contact<span class="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
