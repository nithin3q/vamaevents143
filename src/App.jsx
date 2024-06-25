import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import AboutUs from './components/Aboutus';
import Contactus from './components/Contactus';
import Socials from './components/Socials';
import RecentEvents from './components/RecentEvents';
import Footer from './components/Footer';
import Equipment from './components/Equipment';
import Confetti from './components/Confetti';

// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
     <Router>
      <div className="App" >
        <NavBar />
        <Home/>
        <Services/>
        <About/>
        <RecentEvents/>
        <Equipment/>
        <AboutUs/>
        <Socials/>
        <Contactus/>
        {/* <Confetti/> */}

        <Footer/>

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/card" element={<Card />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer /> */}
      </div>
    </Router>
    </>
  )
}

export default App
