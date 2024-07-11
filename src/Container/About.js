import React from 'react'

const About = () => {
  return (
    <div className="containerFluid jumbotron">
        <center>
            <h2 className='lead'><span className="text-info">About</span>me</h2> 
            <h5 className='lead'> I can dovelop front and back</h5><br/>
            <div className='row '>
            <div className="col col-md-2">
            </div>
            <div className="col col-sm-4">
         <h3 style={{"font-family":"Calibria"}}>What i can do</h3>
         <br/><br/>
         <p className="lead text-justify"style={{"font-family":"Book Antiqua"}} >Hi I cannot  doing anything but i can doing perfectly i can dovelop fullstack websites based on Html and css and javascript and Bootstrap  for frontend. And Reactjs and Mysql and java languages used for backend.  </p>
            </div>
            <div className='col col-sm-4'>
                <h3 style={{"font-family":"Calibria"}}>What i am doing currently</h3>  <br/><br/>
                <p className="lead text-justify"style={{"font-family":"Book Antiqua"}} > Hi presently iam studying Bachelors technology department of Electrical and Electronics Engineering in Sree vidyanikethan engineering college.I am als interested to learn new things and i was more interested designing websites .</p>
            </div>
            <div className='col col-md-2'></div>
            </div>
        </center>
      
    </div>
  )
}

export default About
