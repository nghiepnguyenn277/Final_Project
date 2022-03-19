import React from 'react'
import "./footer.css"
import { GrFacebook,GrInstagram } from "react-icons/gr";



const footer = () => {
  return (
        <footer id='footer'>
            <div class ="left-footer">
                <h1>NIN SHOES</h1>
        
                <p>Copyrights 2022 &copy; Nghiep Nguyen</p>
            </div>
            <div class= "rigth-footer">
                <h4>Follow Us</h4>
                  <a href='https://www.instagram.com/__nin.2k/'> <GrInstagram color='white'/> Instagram</a>
                   <a  href='https://www.facebook.com/nghiepnguyen277'> <GrFacebook color='white' /> Facebook</a>
                       
            </div>
          
        </footer>
  );
}

export default footer;