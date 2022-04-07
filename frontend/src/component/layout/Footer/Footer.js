import React from "react";
import { GrFacebook,GrInstagram } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  return (
        <footer id='footer'>
            <div className ="left-footer">
                <h1>NIN SHOES</h1>
        
                <p>Copyrights 2022 &copy; Nghiep Nguyen</p>
            </div>
            <div className= "rigth-footer">
                <h4>Follow Us</h4>
                  <a href='https://www.instagram.com/__nin.2k/'> <GrInstagram color='white'/> Instagram</a>
                   <a  href='https://www.facebook.com/nghiepnguyen277'> <GrFacebook color='white' /> Facebook</a>
                       
            </div>
          
        </footer>
  );
}

export default Footer;