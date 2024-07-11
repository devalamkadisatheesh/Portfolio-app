import React from 'react'
import {Link} from 'react-router-dom';
const ProjectCard = (props) => {
    const {id,title,imgurl,main}=props.project;
  return (
    <div>
      <div className="card h-100"style={{"box-shadow":"0 6px 20px 0 rgba(0, 0, 0, 0.19)","border-radius":"0px","height":"300px","overflow":"auto"}}>
      <Link to={`/project/${id}`} >   <img 
        className="card-img-top"
        src={imgurl}
        alt="Free Image"
        height="200px"/>  </Link>
        <div className="card-body">
            <h4 className="card-title" style={{"font-family":"Algerian"}}>{title}</h4>
            <p className="card-text" style={{"font-family":"Times"}}>{main}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
