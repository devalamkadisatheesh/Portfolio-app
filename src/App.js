import React from 'react';
import './App.css';
import Addproject from './Addproject';
import Recomend from './Container/Recomend';
import Form from './Form';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Notfound from "./Notfound";
import Projectdummy from './Projectdummy';
import {Provider} from './context';
import Allmyprojects from './Allmyprojects';
import ScrollTop from './ScrollTop';
import Videos from './Videos';
import Java from './Java';
import Imgexplore from './Imgexplore';
function App() {
  return (
<Provider>
   <BrowserRouter>
   <ScrollTop/>
   <Routes>
   <Route path="/java"element={<Java/>} />
    <Route path="/amazon"element={<Videos/>} />
    <Route path="/"element={<Home/>}/>
    <Route path="/Form"element={<Form/>}/>
    <Route path="/Recomend"element={<Recomend/>}/>
    <Route exact path="/project/:id" element={<Projectdummy/>}/>
    <Route path="*"element={<Notfound/>}/>
    <Route path="/project/add"element={<Addproject/>}/>
    <Route path="/Allmyprojects"element={<Allmyprojects/>}/>
    <Route path="/imgexplorer"element={<Imgexplore/>}/>
   
   </Routes>
   </BrowserRouter>
   </Provider>
  );
}

export default App;
