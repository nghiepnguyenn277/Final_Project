import React, { Fragment } from 'react'
import { CgMouse } from 'react-icons/cg';
import "./home.css"
import Product from "./product.js"

const product ={
  name:"Shoes1",
  images:[{url:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_308,c_limit/92947e6d-a7d9-4b6a-8020-040f0cc61879/air-max-2021-shoes-MljWq1.png"}],
  price:"200$",
  _id:"sample",
    size:"26"
};

 const home = () => {
  return (
    <Fragment>
        <div className='banner'>
                <p> Welcome to Nin store</p>
            <a href="#container">
                 <button>
                Scroll mouse <CgMouse/>
                </button>
            </a>
        </div>
        <h2 className="HomeHeading">Featureed Products</h2>
        <div className='container' id='container'>
            <Product product={product}/>

        </div>
        
    </Fragment>
  );
};
 export default home;