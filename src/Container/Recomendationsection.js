import React from 'react'

const Recomendationsection = (props) => {
    const {id,message,position}=props.recomendations;
  return (
    <div>
      <div className="card shadow"style={{"background-color":"white","color":"black","box-shadow":"0 6px 20px 0 rgba(0, 0, 0, 0.19)","border-radius":"0px"}}>
        <div className="card-body">
            <h4 className="card-title"style={{"font-family":"Cambria"}}>{message}</h4>
            <h5 className="card-text"style={{"font-family":"Algerian"}}>{position}</h5>
            <h5 className="lead">Welcome</h5>
        </div>
      </div>
    </div>
  )
}

export default Recomendationsection
