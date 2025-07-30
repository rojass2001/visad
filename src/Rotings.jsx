import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SidePanel from './components/Filter';
import Filter from './Pages/Filter';
import Passengersentry from './components/Addentries';
import Hero from './components/Hero';

function Routings() {
  return (
    <div>
      <Router>
        <Navbar/>
        <SidePanel/>
      <Hero/>
        <Routes>
            <Route path='/' element={<Home/>}/>
             <Route path='/filter' element={<Filter/>}/>
             
        </Routes>
      </Router>
    </div>
  )
}

export default Routings
