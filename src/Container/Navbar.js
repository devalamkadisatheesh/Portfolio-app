import React from 'react'

const Navbar = () => {
  return (
    <div style={{"display":"inline"}}>
      <div className='container'>
      <nav  className="navbar navbar-expand-md fixed-top bg-white">
        <a href="#" className="text-dark font-weight-bold navbar-brand">Satheesh Devalamkadi</a>
        <button className="btn btn-outline-primary " style={{"margin-left":"500px"}}>contact me</button>
        <button 
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapseNav"
        ><span className="fas  fa-bars text-dark">
          </span></button>
          <div className=" collapse navbar-collapse flex-grow-0"id="collapseNav">
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link  text-dark mx-3">Projects</a>
            <a href="/" className="nav-item nav-link  text-dark mx-3">Blocks</a>

          </div>
          </div>
      </nav>
      </div>
    </div>
  )
}

export default Navbar
