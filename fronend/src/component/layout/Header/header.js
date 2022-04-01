import React from 'react';
import {ReactNavbar} from "overlay-navbar";
import logo from "../../../images/logo.png";


const options ={
  burgerColor:"black",
  burgerColorHover:"blue",
  logo,
  logoWidth	:"200px",
  navColor1:"white",
  logoHoverSize :"0px",

  link1Text :" Home",
  link2Text : " Product",
  link3Text : " Chat",
  link4Text : " Contact",

  link1Size :"2.5vmax",
  link1ColorHover :"blue",
  link1Margin:"2vmax",

  link1Url :"/home",
  link2Url :"/products",
  link3Url :"/chat",
  link4Url :"/contact",

  nav1justifyContent :"filex-end",
  nav2justifyContent :"filex-end",
  nav3justifyContent :"filex-start",

 
  profileIconColor :"black",
  searchIconColor :"black",
  cartIconColor:"black",
  searchIconMargin :"1vmax",
  cartIconMargin :"1vmax",
  profileIconMargin :"1vmax",

  profileIconColorHover :"blue",
  searchIconColorHover :"blue",
  cartIconColorHover:"blue",
  
}

const Header = () => {
  return (
    <ReactNavbar {...options} />
    
   
  )
};

export default Header;