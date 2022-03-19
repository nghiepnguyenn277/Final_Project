import React, { Fragment } from 'react'
import { CgMouse } from 'react-icons/cg';
import "./home.css"



 const home = () => {
  return (
    <Fragment>
        <div className='banner'>
                <p> Welcome to Nin store</p>
            <a href="#container">
                 <button>
                Scroll <CgMouse/>
                </button>
            </a>
        </div>
        <h2 className="HomeHeading">Featureed Products</h2>
        
    </Fragment>
  );
};
 export default home;