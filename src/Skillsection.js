import React from 'react'

const Skillsection = (props) => {
    const {id,name,imageurl,starstotal,starsactive}=props;
  return (
    <div>
       <img src={imageurl} className="rounded-circle"style={{"width":"100px","height":"100px"}}alt={name}/>
  
    </div>
  )
}

export default Skillsection