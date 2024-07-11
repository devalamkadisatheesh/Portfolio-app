import React from 'react'
import Nav from './Container/Nav';
import Img from './Container/Img';
import About from './Container/About';
import Footer from './Container/Footer'
import Projectsection from './Container/Projectsection';
import Technology from './Container/Technology';
import './App.css';
import Recomendation from './Container/Recomendation';


const Home = () => {
  return (
    <div className="text-center" style={{backgroundImage:`url('https://wallpaperaccess.com/full/2716884.jpg')`}}>
      <center>
      <Nav/><br/><br/>

        <Img name="satheesh "lead="MohanBabu University" />
        <Recomendation/>
        <Technology/>
        <Projectsection/>
        <br/>  <br/>
       
        <About/>
      
        <Footer/>
      </center>
    </div>
  )
}

export default Home
