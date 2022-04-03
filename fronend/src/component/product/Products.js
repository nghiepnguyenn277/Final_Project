import React, { Fragment, useEffect, useState } from 'react'
import "./Products.css"
import {clearError,getProduct} from "../../actions/productAction"
import {useDispatch,useSelector} from "react-redux";
import Loader from '../layout/loader/Loader';
import ProductCard from '../Home/ProductCard';
import Pagination from 'react-js-pagination'



 
const Products = ({match}) => {

    const keyword = match.params.keyword
    const {loading,error,products,productsCount,resultPerPage} = useSelector(state=>state.products);
    const dispatch =useDispatch();
    const[currentPage,setCurrentPage] =useState(1)
    const setCurrentPageNo = (e)=>{
        setCurrentPage(e)
    }

    useEffect(()=>{
        dispatch(getProduct(keyword,currentPage))
    },[dispatch,keyword,currentPage])
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
          {resultPerPage < productsCount &&   
            (<div className='paginationB'>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage ={resultPerPage}
                    totalItemsCount ={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText ="Next"
                    prevPageText ="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass='page-item'
                    linkClass='page-link'
                    activeClass='pageItemActive'
                    activeLinkClass='pageLinkActive'
                />  
            </div>)}
        </Fragment>}
    </Fragment>
  );
};

export default Products