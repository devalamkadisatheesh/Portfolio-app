import React from 'react'
import Footer from './Container/Footer';
import {useParams} from 'react-router-dom';
import {Consumer} from './context';
import  ReactMarkdown  from 'react-markdown';
import Head from './Head';
const Projectdummy = () => {
  let id =useParams();
  return(
    <Consumer>
      {(value)=>{
         const {projects}=value;
          const project=projects.filter((project)=>project.id==id.id)[0];
          const {title,imgurl,main,body}=project;
         
         return (
           <div >
           
            <Head/>
        
              <div className='markdown container-fluid text-justify card ' >
              <center>
                <img className="card-body" src={imgurl} style={{"width":"60%","height":"50%","border-radius":"0px","box-shadow":"0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/><br/>
                <h3 style={{"font-family":"Sitka Text Semibold"}} className="card-title">{title}</h3>
                <br/>
                <h3 className='lead card-text'style={{"font-family":"Constantia"}}>{main}</h3><br/>
                <ReactMarkdown className="lead"> </ReactMarkdown>
                <div className="Container">
                  <p style={{"font-family":"Times","font-size":"4vh","padding":"10px"}} className="text-justify bg-light text-dark">
                  These are just a few examples of true projects that have a defined start and end date, goal, scope, and resources. And they all require some level of management.

In business, which is where we’ll focus in this chapter, a project is typically a unique operation conducted to meet specific goals. Examples of projects may include: 

Development of software to increase employee productivity
Construction of a building to house community events
Design of a website to decrease call volume to a business
All of these projects require a team of people who are responsible for different aspects of the delivery. For example, you’d likely see a designer, developer, and copywriter working on website design projects. In many instances, a project manager is staffed to these projects to ensure the team delivers the project on time and under budget and hits its key objectives.
                  </p><br/>
    
                </div>
                </center>
              </div>
              <center>
              <Footer/>
              </center>
             
           </div>
         )

      }}
    </Consumer>
  )
 
}

export default Projectdummy
