import React,{Component} from 'react';
import Head from './Head';
import Footer from './Container/Footer';
import emailjs from 'emailjs-com';
class Form extends Component{
    state={
        name:"",
        email:"",
        password:"",
        message:"",
        submitmessage:"",
        submitcolor:""
    }
   onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    }
   onSubmit=e=>{
        e.preventDefault();
       const {name}=this.state;
       emailjs.sendForm('service_zhgh3e5', 'template_bih98vd', e.target, 'p2uudYseUpmpdfzic')
       .then((result) => {
           console.log(result.text);
           this.setState(
            {
              submitmessage:`Thank you ${name} I will contact soon...`,
              submitcolor:"text-info"
            }
        )
       }, (error) => {
           console.log(error.text);
           this.setState(
            {
              submitmessage:"Ooops something went wrong...",
              submitcolor:"text-danger"
            }
           )
       });
       e.target.reset();   
    }
    alerts=()=>{
        window.alert("wait some seconds....")
    }
render(){
    const {submitmessage,submitcolor}=this.state;
    return(
       
        <div className="Container-fluid text-center" >
            <center>
                <Head/><br/>
        <h2 style={{"font-family":"Times"}}><span className='text-info'>Thank you</span> for your interest</h2>
        <form onSubmit={this.onSubmit}style={{"border":"1px solid black","width":"70%"}}className='bg-light' action="https://formsubmit.co/75ea3fa5bb954f03d123fa5befc70a3b" method="POST">
            <label>Name : </label><br/>
               <input type="text"name="name"onChange={this.onChange}/><br/><br/>
            <label>Email : </label><br/>
            <input type="email"name="email" onChange={this.onChange}/><br/><br/>
            <label>Password : </label><br/>
            <input type="password"name="password" onChange={this.onChange}/><br/><br/>
<label>Message : </label><br/>
            <input type="text"name="message" onChange={this.onChange}/><br/><br/>
            <input className="btn btn-primary m-2" type="submit"onClick={this.alerts}/>
            <input type="reset"className='btn btn-danger m-2' value="clear"/>
        </form>
        <h3 className={submitcolor} ><span className='lead'>{submitmessage}</span></h3><br/>
        <Footer/>
        </center>
        </div>
    )
}
}
export default Form