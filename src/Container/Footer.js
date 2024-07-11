import React from 'react'
import {Link }from "react-router-dom";
const Footer = () => {
  return (
    <div>
     <footer className='bg-dark'>
        <h3 style={{"font-family":"Times"}} className='text-light'>Interested in working with me</h3>
       <Link to="/Form"> <button className='btn btn-outline-light text-white '>Lets talk</button></Link><br/><br/><br/>
        <div className="row text-center">
            <div className='col col-sm text-center'>
                <span className="text-info"style={{"font-family":"Book Antiqua"}}>More Links</span><br/>
                <a href="#"style={{"font-family":"Book Antiqua"}}>Blocks</a><br/>
                <Link to="/"style={{"font-family":"Book Antiqua"}}>Home</Link><br/>
                <Link to="/Form"style={{"font-family":"Book Antiqua"}}>Contact me</Link><br/>
                <Link to="/Recomend"style={{"font-family":"Book Antiqua"}}>Recomendation </Link><i className='fa fa-heartbeat bg-light'></i><br/>
            </div>
            <div className='col col-sm  text-center'>
                <p className=" lead text-justify text-light"style={{"font-family":"Book Antiqua","font-size":"3wh"}}>Your are interested to work with me then you contact me and i am doing project so i have a team and your are a team member we can dovelop fullstack websites and real time applications. </p>
            </div>
            <div className='col col-sm  text-center'>
                <span className='text-info 'style={{"font-family":"Book Antiqua"}}>Social</span><br/>
                <Link to="https://www.facebook.com/"class="bg-black"><i className='fa fa-facebook-square bg-light'></i><br/></Link>
               <Link to="https://www.linkedin.com/feed/"> <i className='fa fa-linkedin-square bg-light'></i><br/></Link>
              <Link to="https://web.telegram.org/z/">  <i className='fa fa-telegram bg-light'></i><br/></Link>
          </div>
        </div>
        </footer> 
    </div>
  )
}
export default Footer
