import React from 'react'
import {Link} from 'react-router-dom';
const Head = () => {
  return (
    <div>
      
      <nav className="navbar bg-light">
       <Link to="/">   <h2 style={{"font-family":"Calibria","text-align":"left","padding":"1px"}}className=' text-dark'><span className="fa  fa-arrow-circle-left"></span>Home</h2></Link>
    <Link to="/Form"><button className="btn btn-outline-info">Contact me</button></Link> 
          </nav>
    </div>
  )
}
export default Head
