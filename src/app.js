import React, { useRef, useState, useContext } from 'react';
import Navbar from './navbar.js';
import LaptopSection from './components/LaptopSection';
import Header from './header.js';
import Techstack from './techstack.js';
import Project from './project.js'
import Aboutme from './aboutme.js'
import Contactme from './contactme.js'
import Footer from './footer.js'
import TimeLine from './timeline.js'

function App(props) {

    return(
        <div>     
        <Navbar />
        <LaptopSection />
        <Header />
        <TimeLine />
        <Project />
        <Techstack />
        <Aboutme />
        <Contactme />
        <Footer />

      
        </div>
    )
}

export default App;