import React ,{ Component } from 'react';
const Context=React.createContext();
export class Provider extends  Component{
    handler=(action,newProject)=>{
        switch(action){
      case 'ADD_PROJECT':
        
        this.setState({
           projects:[newProject, ...this.state.projects],
        });
        break;
        case 'ADD_RECOMENDATION':
            this.setState({
                Recomendation:[newProject,...this.state.Recomendation],
            })
    };
}
state={
    handler:this.handler,
     skill:[
        {
            id:1,
            name:"Html",
            imageurl:"https://www.clipartkey.com/mpngs/m/210-2104705_html-logo-png-transparent-background.png",
            starstotal:3,
            starsactive:2
        },
        {
            id:2,
            name:"Css",
            imageurl:"https://th.bing.com/th/id/OIP.sfm46nH5jpFdrFN4-GiVsAAAAA?pid=ImgDet&w=300&h=300&rs=1",
            starstotal:3,
            starsactive:3
        },
        {
            id:3,
            name:"Javascript",
            imageurl:"https://th.bing.com/th/id/R.0349998e26306c9bd68c3fd554453cb6?rik=CsJD4oMmU%2f8PGw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-javascript-png--784.png&ehk=e%2f8crq8mmCNuf0GbM5uH2n0Fd0HKI%2f%2bQDt7wWatvXjE%3d&risl=&pid=ImgRaw&r=0",
            starstotal:3,
            starsactive:2
        },
        {
            id:4,
            name:"Bootstrap",
            imageurl:"https://th.bing.com/th/id/OIP.zwQq1PoC9MdvF7QCMU8grAHaH1?pid=ImgDet&rs=1",
            starstotal:3,
            starsactive:2
        },
        {
            id:5,
            name:"React js",
            imageurl:"https://ih1.redbubble.net/image.782728986.1912/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
            starstotal:3,
            starsactive:2
        },
        {
            id:6,
            name:"Mysql",
            imageurl:"https://thumbs.dreamstime.com/z/mysql-icon-vector-isolated-white-background-logo-concept-mysql-sign-transparent-background-filled-black-symbol-mysql-icon-125792613.jpg",
            starstotal:3,
            starsactive:2
        },
        {
            id:7,
            name:"Python",
            imageurl:"https://ih1.redbubble.net/image.183715177.5262/raf,750x1000,075,t,322e3f:696a94a5d4.jpg",
            starstotal:3,
            starsactive:2
        },
        {
            id:8,
            name:"Java",
            imageurl:"https://wallpapercave.com/wp/wp7250277.jpg",
            starstotal:3,
            starsactive:2
        }
    ],
         Recomendation:[
            {
                id:1,
                message:"He is good engineer",
                position:"Aim:CEO",
            },
            {
                id:1,
                message:"Good thinking skills",
                position:"Social responcibilities",
            },
            {
                id:1,
                message:"Ability to grab anything",
                position:"Software engineer",
            },
            {
                id:1,
                message:"Interested to learning new things",
                position:"",
            },
            {
                id:1,
                message:"Time management",
                position:"Perfect",
            },  {
                id:1,
                message:"Good attitude",
                position:"Social concern",
            }
        ],
    projects:[
        {
            id:1,
            title:"Stop Clock",
            imgurl:"https://media.istockphoto.com/photos/stopwatch-picture-id825554266?k=6&m=825554266&s=612x612&w=0&h=JeRADQ3gYOklSeGOSvJoD8yQGgSIqpJk0TaOBYNM4rA=",
            main:"This is my project based on Js&css&html",
            body:"body1"
        },
        {
            id:2,
            title:"Casio",
            imgurl:"https://th.bing.com/th/id/R.700fb62c8043de1b0451b54386505062?rik=Lmjekp7WHECyxA&riu=http%3a%2f%2fwww.wikihow.com%2fimages%2f1%2f10%2fFind-the-Minimum-and-Maximum-Points-Using-a-Graphing-Calculator-Step-7.jpg&ehk=s0nW6wfVTPXWRM8ivwIi95BSzXErXDpb4kwBp53OcFY%3d&risl=&pid=ImgRaw&r=0",
            main:"This project is based on Js&css&html",
            body:"body2"
        },
        {
            id:3,
            title:"Hotelbooking.com",
            imgurl:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            main:"This project is based on js&bootstrap",
            body:"body3"
        },
        {
            id:4,
            title:"Restaurent",
            imgurl:"https://th.bing.com/th/id/OIP.Cl_5Jp99SFiVcA2qRrghbAHaFt?pid=ImgDet&rs=1",
            main:"This project is based on React js",
            body:"body5"
        },
        {
            id:5,
            title:"New project",
            imgurl:"https://i.pinimg.com/originals/91/01/7f/91017f87ea6c7bd5386eb0ae0dcc72c7.jpg",
            main:"This project is based on fullstack",
            body:"body6"
        },
        {
            id:6,
            title:"Intelligence",
            imgurl:"https://www.wedigtech.com/img/home-service-img3.jpg",
            main:"This project is based on fullstack",
            body:"body7"
        }
        
    ],
}
    render(){
    return(
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
}
};
export const Consumer=Context.Consumer;