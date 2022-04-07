import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "black",
  logo,
  logoWidth: "200px",
  navColor1: "white",
  logoHoverSize: "10px",
  
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.5vmax",
  link1Color: "black",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "blue",
  link1Margin: "2vmax",
  profileIconUrl: "/login",
  //color
  profileIconColor :"black",
  searchIconColor :"black",
  cartIconColor:"black",
  //hover
  profileIconColorHover :"blue",
  searchIconColorHover :"blue",
  cartIconColorHover:"blue",
  cartIconMargin: "1.5vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
