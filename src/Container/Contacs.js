import React,{Component} from 'react';
class Contacs extends Component{
render(){
    return(
        <div className="Container-fluid" >
        <h2><span className='text-info'>Thank you</span>for your interest</h2>
        <form >
            <label>Name :</label>
            <input type="text"name="name"/>
        </form>
        </div>
    )
}
}
export default Contacs