import './App.css';
import Header from "./component/layout/Header/header";
import {BrowserRouter as Routes,Route,Switch} from "react-router-dom";
import webFont from "webfontloader";
import React from 'react';
import Footer from "./component/layout/Footer/footer"
import Home from "./component/Home/home.js";
import ProductDetails from "./component/product/ProductDetails.js"







function App() {

  React.useEffect(()=>{
    webFont.load({
      google:{
          families:["Roboto","Droid Sans","Chilanka"],
      },
    })
  },[]);

  
  return (
  
    <Routes>
      <Header/> 
      <Route  path="/" component={Home}/>   
      <Route  path="/product/:id" component={ProductDetails}/>    
      <Footer/>
    </Routes>
    
       
  );
};

export default App;
