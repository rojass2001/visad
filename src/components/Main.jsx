import React from 'react'

import SidePanel from './Filter';
import Hero from './Hero';
import Home from '../Pages/Home';
import Navbar from './Navbar';

function Main() {
  return (
    <div>
     
    <Navbar/>
     <SidePanel/>
       <Hero/>
      <Home/>
     
    </div>
  )
}

export default Main