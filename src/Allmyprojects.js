import React from 'react'
import {Consumer} from './context';
import ProjectCard from './Container/ProjectCard';
import Head from './Head';
import Footer from './Container/Footer';
const Allmyprojects = () => {
  return (
    <Consumer>
      {(value)=>{
        const {projects}=value;
        return (
        <div>
            <Head/>
            <div className="container">
                <center>
                <h2 style={{"font-family":"Tahoma"}}>All my <span className="text-info">projects</span></h2>
            <div className="row ">
         {projects.map((project)=>(
            <div key={project.id}className="col-12 col-md-6">
                <ProjectCard project={project}/><br/>
            </div>
  ))}
         </div>
         </center>
      
         </div>
         <div className="text-center">
         <Footer/>
         </div>
         </div>
        )
      }}
    </Consumer>
  )
}

export default Allmyprojects
