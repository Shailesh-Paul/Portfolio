import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
   <>
     <Navbar></Navbar>
     <Home></Home>
     <About></About>
     <Portfolio></Portfolio>
     <Experience></Experience>
     <Contact></Contact>
     <Footer></Footer>
     
   </>
  )
}

export default App