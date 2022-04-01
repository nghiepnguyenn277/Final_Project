import './App.css';
import Header from "./component/layout/Header/header";
import {BrowserRouter as Router,Route} from "react-router-dom";
import webFont from "webfontloader";
import React from 'react';
import Footer from "./component/layout/Footer/footer"
import Home from "./component/Home/home.js"
import ProductDetails from "./component/product/ProductDetails.js"
import Products from "./component/product/Products.js"
import Search from "./component/product/Search.js"






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
      <Route exact path="/" component={Home}/>   
      <Route exact path="/product/:id" component={ProductDetails}/>    
      <Route exact  path="/products" component={Products}/> 
      <Route path ="/products/:keyword" component={Products}/> 

      <Route exact  path="/search" component={Search}/> 
      
      <Footer/>
    </Router>
    
       
  );
};

export default App;
