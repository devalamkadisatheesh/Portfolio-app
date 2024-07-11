import React, { Component } from 'react'
import Head from './Head';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import {Consumer} from './context';
import {v4 as uuid} from 'uuid';
import Footer from './Container/Footer';
class Addproject extends Component {
    state={
        id:"",
        title:"",
        imgurl:"",
        main:"",
        body:"",
        submitmessage:"",
        submitcolor:""
    }
    onChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onBodyChange=value=>{
      this.setState({
        body:value
      });
    }
  
    onSubmit=(handler,e)=>{
    e.preventDefault();
       const success=true;
       if(success){
        this.setState({
            submitmessage:`successfully adding your project...`,
            submitcolor:"text-info"
        })
       }
       else{
        this.setState({
            submitmessage:`Ooops something went wrong ! please try again...`,
            submitcolor:"text-danger"
        })
       }
   const  newProject={
      id:uuid(),
      title:this.state.title,
      imgurl:this.state.imgurl,
      main:this.state.main,
      body:this.state.body,

    }
    handler("ADD_PROJECT",newProject);
}
  render() {
    return(
      <Consumer>
      {(value)=>{
        const {imgurl,title,main,submitmessage,submitcolor,body}=this.state;
        const {handler}=value;
        return (
          <div >
            <Head/>
            <center className='container-fluid'>
          
            <h3  style={{"font-family":"Book Antiqua"}} className="text-info">Add Project</h3>
            <div className='row text-center' >
              <div className='col-12 col-lg-6'>
                <form onSubmit={this.onSubmit.bind(this,handler)}className="lead" onClick={this.satheesh}>
                    <label>ImageUrl*</label><br/>
                    <input type="text"name="imgurl"onChange={this.onChange}style={{width:"100%"}} /><br/>
                    <label>Title*</label><br/>
                    <input type="text"name="title" onChange={this.onChange}style={{width:"100%"}}/><br/>
                    <label>Abstract*</label><br/>
                    <input type="text"name="main"onChange={this.onChange}style={{width:"100%"}}/><br/><br/>
                    <SimpleMDE onChange={this.onBodyChange}/>
                    <input type="submit"value='Publish'style={{width:"100%","backgroundColor":"gray"}}/>
                </form>
                  <h3 className={submitcolor} ><span className="lead">{submitmessage}</span></h3>
              </div>
              <div className='col-12 col-lg-6' ><br/>
              <div className='markdown' >
                <img src={imgurl} height="350px"className="img-fluid"/><br/>
                <h3 className="lead">{title}</h3>
                <br/>
                <h3 className='lead'>{main}</h3>
                <ReactMarkdown className="lead">{body}</ReactMarkdown>
              </div>
              </div>
            </div>
            </center>
            <div className='text-center'><Footer/></div>
          </div>
        )

      }}
      </Consumer>
    )

  }
}
export default Addproject
