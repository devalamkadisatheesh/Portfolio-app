import React from 'react'
import {Link} from "react-router-dom"
const Img = (props) => {
 // const name="Satheesh Kumar";;
  //const lead="Sree vidyanikethan";
  const {name,lead}=props;
  return (
    <div className='container-fluid'>
    <div className=" container-fluid p-3  text-center text-dark bg-light" >
      <center>
        <div className="row text-center">
        <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-3">
   <Link to="/imgexplorer">  <img src="https://th.bing.com/th/id/OIP.hqgXmy-r13g-63xcvlz6AwHaE7?rs=1&pid=ImgDetMain"width="260px"height="260px"className="rounded-circle "/></Link> <br/><br/>
      </div>
      <div className="col-12 col-md-3"></div>
      <div className="col-12 col-md-4"style={{"margin-top":"80px"}}>
        <h3 className="lead"style={{"font-size":"30px"}}>Hi I am <span style={{"font-weight":"200"}} className="text-info ">{name}</span></h3>
        <h6 className="lead"style={{"font-size":"20px"}}>I am student of </h6>
        <h6 className="lead"style={{"font-size":"20px"}}>{lead}</h6><br/><br/><br/>
        </div>
        <div className="col-12 col-md-1"></div>
        </div>
        </center>
      </div>
      </div>
  )
}

export default Img
