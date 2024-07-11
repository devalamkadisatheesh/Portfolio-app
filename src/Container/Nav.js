import React from 'react'
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <div className="navbar-expand-sm">
      <nav className="navbar nav-brand nav-light bg-light text-white"style={{"font-family":"Times","color":"white"}}>

        <Link to="/java" className="navbar nav-item   "style={{"font-family":"Times","font-size":"30px","color":"black"}}><img src="https://th.bing.com/th/id/OIP.uF-DuRwqLXy30YvxWYHVCwHaE8?pid=ImgDet&rs=1"width="100"className="rounded-circle  "/>Kumar</Link>
        <button className="navbar-toggler"data-toggle="collapse"data-target="#collapseid">
            <span className="fa fa-bars text-dark"></span>
          </button>
          <div className="navbar-collapse collapse navbar-left text-left" flex-grow-none id="collapseid"style={{"text-align":"right"}}>
            <div style={{"flex-grow":"1"}}></div>
   <Link to="/Allmyprojects"className="navbar nav-item text-dark "style={{"font-family":"Times","text-align":"right"}}><button className='btn '><h3>Projects</h3></button></Link>
   <Link   to="/project/add" className="navbar nav-item text-dark"style={{"font-family":"Times"}}><button className='btn '><h3>Add Projects</h3></button></Link>
         <Link to="https://www.google.com/"className="navbar nav-item text-dark"style={{"font-family":"Times"}}><button className='btn '><h3>Exit web</h3></button></Link>
         <Link to="/Form" style={{"margin-left":""}}>      <button className="btn btn-outline-info btn-lg">Contact me</button></Link><br/>
          </div>
  
      </nav>
    </div>
  )
}

export default Nav
