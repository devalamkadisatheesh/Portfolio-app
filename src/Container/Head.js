import React from 'react'
import {Link} from 'react-router-dom';
const Head = () => {
  return (
    <div>
     <nav className="display-flex">
        
     <Link to="/">   <h2 style={{"font-family":"Times","text-align":"left","padding":"5px"}}className='bg-light text-dark'><i className="fa fa-arrow-circle-left"></i>Home</h2></Link>
        </nav> 
    </div>
  )
}

export default Head
