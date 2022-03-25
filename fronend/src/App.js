import './App.css';
import Header from "./component/layout/Header/header";
import {BrowserRouter as Router,Route} from "react-router-dom";
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
    <Router>
      <Header/> 
        <Route extact path="/" component={Home}/>   
        <Route extact path="/product/:id" component={ProductDetails}/>      
      <Footer/>  
       </Router>
       
  );
};

export default App;
