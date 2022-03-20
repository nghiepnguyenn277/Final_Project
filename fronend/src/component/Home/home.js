import React, { Fragment, useEffect } from 'react'
import { CgMouse } from 'react-icons/cg';
import "./home.css"
import Product from "./product.js"
import MetaData from '../layout/metaData';
import {getProduct} from "../../actions/productAction"
import  {useSelector,useDispatch} from "react-redux"





const product ={
  name:"Shoes1",
  images:[{url:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_308,c_limit/92947e6d-a7d9-4b6a-8020-040f0cc61879/air-max-2021-shoes-MljWq1.png"}],
  price:"200$",
  _id:"sample",
   
};

 const Home = () => {

  const  dispatch = useDispatch();
  const {loading,error,products,productCount} =useSelector(state=>state.products)
  useEffect(()=>{

    dispatch(getProduct());
  },[dispatch])



  return (
    <Fragment>

        <MetaData title ="Nin Shoes" />


        <div className='banner'>
                <p> Welcome to Nin store</p>
            <a href="#container">
                 <button>
                    Scroll mouse <CgMouse />
                </button>
            </a>
        </div>
        <h2 className="HomeHeading">Featureed Products</h2>
        <div className='container' id='container'>
            {products & product.map((product) => <Product product={product}/>)};
        </div>
        
    </Fragment>
  );
};
 export default Home;