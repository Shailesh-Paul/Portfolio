import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';


function App() {
  return (
   <>
  
     <Navbar />
     <Home />
     <About />
     <Portfolio />
     <Experience />
     <ContactUs />
     <Footer />
   </>
  )
}

export default App