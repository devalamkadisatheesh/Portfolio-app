import "./App.css"
import React from 'react'
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <nav className="navbar nav-brand nav-light bg-light text-white"style={{"font-family":"Times","color":"white"}}>
        <Link to="/java" className="navbar nav-item   "style={{"font-family":"Times","font-size":"30px","color":"black"}}>SATHEESH KUMAR DEVALAMKADI</Link>
    <Link to="/Form"><button className="btn btn-outline-info">Contact me</button></Link> 
   
          <a href="#"className="navbar nav-item text-dark satheesh"style={{"text-decoration":"none"}}>Projects</a>
          <a href="#"className="navbar nav-item text-dark">Blocks</a>

      </nav>
    </div>
  )
}

export default Nav
