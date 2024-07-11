import React,{Component} from 'react';
import Head from './Head';
import {Consumer} from '../context';
import Footer from './Footer';
class Recomend extends Component{
    state={
        message:"",
        email:"",
        password:"",
        institution:"",
        position:"",
        recomendation:"",
        submitmessage:"",
        submitcolor:""
        
    }
   onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    }
   onSubmit=(handler,e)=>{
        e.preventDefault();
       const {name}=this.state;
       let success=true;
       if(success){
        this.setState(
            {
              submitmessage:`Thank you ${name} I will contact soon...`,
              submitcolor:"text-info"
            }
        )
       }
       else{
        this.setState(
            {
              submitmessage:"Ooops something went wrong...",
              submitcolor:"text-danger"
            }
        )

       }
       const recomendation={
        message:this.state.message,
        position:this.state.position

       }
       handler("ADD_RECOMENDATION",recomendation);
        
    }
render(){
    return(
        <Consumer>
        {(value)=>{
           const {submitmessage,submitcolor}=this.state;
           const {handler} =value;
           return(
              
               <div >
                   <Head/>
                   <center className="Container-fluid" >
                   <br/><br/>
               <h2 style={{"font-family":"Times"}}><span className='text-info'>Thank you</span> for your interest</h2>
               <form onSubmit={this.onSubmit.bind(this,handler)} style={{"border":"1px solid black","width":"70%"}} className='bg-light'>
                   <label>Mesage : </label><br/>
                      <input type="text"name="message"onChange={this.onChange}/><br/><br/>
                   <label>Email : </label><br/>
                   <input type="email"name="email" onChange={this.onChange}/><br/><br/>
                   <label>Password : </label><br/>
                   <input type="password"name="password" onChange={this.onChange}/><br/><br/>
       <label>Institution : </label><br/>
                   <input type="text"name="institution" onChange={this.onChange}/><br/><br/>
                   <label>Position: </label><br/>
                   <input type="text"name="position" onChange={this.onChange}/><br/><br/><label>Recomendation: </label><br/>
                   <input type="text"name="recomendation" onChange={this.onChange}/><br/><br/>
                   <input type="submit" className="btn btn-primary m-2"/>
                   <input type="reset" className="btn btn-danger m-2"/>
               </form>
               <h3 className={submitcolor} ><span className='lead'>{submitmessage}</span></h3>
               <br/>
               <Footer/>
               </center>
               </div>
           )
        }}
        </Consumer>
    )
   
}
}
export default Recomend