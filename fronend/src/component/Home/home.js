import React, { Fragment, useEffect } from 'react'
import { CgMouse } from 'react-icons/cg';
import "./home.css"
import Product from "./product.js"
import MetaData from '../layout/metaData';
import {getProduct} from "../../actions/productAction"
import  {useSelector,useDispatch} from "react-redux"
import Loader from '../layout/loader/Loader';
import { useAlert } from 'react-alert';


  const Home = () => {

  const alert =useAlert()
  const  dispatch = useDispatch();
  const {loading,error,products,productsCount} =useSelector(state=>state.products);
 
  useEffect(()=>{
   if(error){
      return alert.error(error);
   }
    dispatch(getProduct());
  },[dispatch,error,alert]);



  return (
    <Fragment>
   {loading ? 
      <Loader/> :
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
          {products && products.map(product=>(<Product product ={product}/>
          ))}
      </div>
  </Fragment>}
    </Fragment>
  );
};
 export default Home;