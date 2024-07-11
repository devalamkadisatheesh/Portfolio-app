import React from 'react'
import {v4 as uuid} from "uuid";

const Skillsection = (props) => {
    const {id,name,imageurl,starstotal,starsactive}=props.skills;
    const starslist=[];
    for(let i=0;i<starstotal;i++){
      if(i<starsactive){
        starslist.push(<span key={uuid()}className='text-info'><img src="https://th.bing.com/th/id/OIP.2ewl7U3edY6pbiZsJIddHAHaHa?pid=ImgDet&rs=1"style={{"width":"17px","height":"17px"}}/></span>)
      }
      else{
        starslist.push(<span key={uuid()}><img src="https://static.vecteezy.com/system/resources/previews/000/633/406/original/star-icon-symbol-sign-vector.jpg"style={{"width":"20px","height":"20px"}}/></span>)
      }
    }
  return (
    <div>
    <div className="card shadow  m-3"style={{"backgroundColor":"black"}}>
      <h4 className="text-white"style={{ "font-family": "Advent Pro"}}>{name}</h4>
      <img src={imageurl} alt={name}className="rounded-circle"style={{"width":"100px","height":"100px"}}/>
    </div>
    {starslist}
    </div>
  )
}

export default Skillsection
