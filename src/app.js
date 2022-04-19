import React from 'react';
import { Router, Routes, Route } from 'react-router-dom'
import Navbar from './navbar.js';
import Header from './header.js';
import Techstack from './techstack.js';
import Project from './project.js'
import Aboutme from './aboutme.js'

function App() {
    return(
        <div>     
        <Navbar />
        <Header />
        <Project />
        <Techstack />
        <Aboutme />
        </div>
    )
}

export default App;