import React from 'react';
import {Consumer} from '../context';
import Recomendationsection from './Recomendationsection';
const Recomendation=()=>{
    return(
        <Consumer>
            {value=>{
                const {Recomendation}=value;
 return (
    <div>
    <div className="row d-flex flex-nowrap  overflow-scroll shadow-lg p-3 mb-5 bg-body   "style={{"overflow":"auto"}}>
    { Recomendation.map((recomendations)=>(
          <div className="col-12 col-md-4 ">
             <Recomendationsection
            recomendations={recomendations}
              />
             </div>
    )
    )
    }
    </div>
    </div>
      )
            }}
        </Consumer>
    )
 
}

export default Recomendation
