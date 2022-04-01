import React, { Fragment, useEffect } from 'react'
import "./Products.css"
import {clearError,getProduct} from "../../actions/productAction"
import {useDispatch,useSelector} from "react-redux";
import Loader from '../layout/loader/Loader';
import ProductCard from '../Home/ProductCard';



 
const Products = ({match}) => {

    const keyword =match.params.keyword
    const {loading,error,products,productsCount} = useSelector(state=>state.products);
    const dispatch =useDispatch();
   

    useEffect(()=>{
        dispatch(getProduct(keyword))
    },[dispatch,keyword])
  return (
    <Fragment>
        {loading ? <Loader/>:
        <Fragment>
            <h2 className='productHeading'>Products</h2>
            <div className='products'>  
                {products && products.map((product)=>(
                    <ProductCard key ={product._id}product={product}/>
                ))}
            </div>
        </Fragment>}
    </Fragment>
  );
};

export default Products