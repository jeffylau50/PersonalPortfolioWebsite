import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './navbar.js'
import Header from './header.js'

function App() {
    return(
        <div>     
        <Navbar />
        <Header />
        </div>
    )
}

export default App;