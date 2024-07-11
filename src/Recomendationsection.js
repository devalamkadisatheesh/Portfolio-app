import React from 'react'

const Recomendationsection = (props) => {
    const {id,message,position}=props.recomendations;
  return (
        <div className="col-12 col-md-4">
      <div className="card card shadow h-100 shadow-lg p-3 mb-5 bg-body rounded"  style={{"card-shadow":"2px 2px 2px black"}}>
        <div className="card-body ">
            <h4 className="card-title"><span  style={{"font-family":"Times"}}>{message}</span></h4>
            <h5 className="card-text lead">{position}</h5>
            <h5 className="lead">Welcome</h5>
        </div>
        </div>
      </div>
  )
}

export default Recomendationsection
