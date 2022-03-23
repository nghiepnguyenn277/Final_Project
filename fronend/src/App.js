import './App.css';
import Header from "./component/layout/Header/header";
import {BrowserRouter as Router,Route} from "react-router-dom";
import webFont from "webfontloader";
import React from 'react';
import Footer from "./component/layout/Footer/footer"
import Home from "./component/Home/home";





function App() {

  React.useEffect(()=>{
    webFont.load({
      google:{
          families:["Roboto","Droid Sans","Chilanka"],
      },
    })
  },[]);

  
  return (
    <Router>
      <Header/> 
      <Route extact path="/" component={Home}/>  
       
      
    
      <Footer/>  
       </Router>
       
  );
};

export default App;
