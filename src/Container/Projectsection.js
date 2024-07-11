import React from 'react';
import ProjectCard from './ProjectCard';
import {Consumer} from '../context';
import { Link } from 'react-router-dom';

const Projectsection = () => {
    return(
<Consumer>
    {(value)=>{
        const {projects}=value;
        return(
   <div>
   <center>
       <h3 style={{"font-family":"Times"}}className="text-info">My Projects</h3>
       <h6 className="lead">I build products. Just like this website</h6><br/><br/>
       <div className="row mx-2">

                  { projects.slice(0,3).map((project)=>(
                        <div className="col-12 col-md-4">
                           <ProjectCard
                           project={project}
                       
                            />
                            <br/>
                                    
                           </div>
               
                  )
                  )
               }
               
               </div>
               <Link to="/Allmyprojects"> <h5 className='lead text-dark text-right'>see all my projects <span className="fa fa-arrow-circle-right "></span></h5></Link>
             
   </center>
 </div>
        )
    }}
</Consumer>
) 
}

export default Projectsection
