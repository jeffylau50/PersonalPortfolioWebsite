import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './navbar.js'
import Header from './header.js'
import Techstack from './techstack.js';

function App() {
    return(
        <div>     
        <Navbar />
        <Header />
        <Techstack />
        </div>
    )
}

export default App;