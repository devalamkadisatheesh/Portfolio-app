import React from 'react'
import Skillsection from './Skillsection';
import {v4 as uuid} from "uuid";
import {Consumer} from '../context';
const Technology = () => {
    return(
        <Consumer>
        {(value)=>{
            const {skill}=value;
            const finalSkillrow=[];
            for(let i=0;i<2;i++){
               let skillrow=skill.slice((4*i),((i+1)*4));
                finalSkillrow.push(
                    <div key={uuid()}className="d-flex  justify-content-around"style={{"overflow":"auto"}}>
                      {
                        skillrow.map((skills)=>(
                            <Skillsection key={uuid()} skills={skills}/>
                        ))
                      }
                    </div>
                )
            }
          return (
            <div className="bg-light w-100">
              <div className="container">
                <h3 className="font-weight-light"style={{"font-family":"Times"}}><span className='text-info'>Technology</span>stack</h3><br/>
                <h4 className="lead">I design and dovelop the deliver with theese tools</h4><br/>
                   {finalSkillrow}
              </div>
            </div>
          )
        }}
        </Consumer>
    )
   
}

export default Technology
