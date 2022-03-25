import React, { Fragment, useEffect } from 'react'
import Carousel from "react-material-ui-carousel"
import "./ProductDetails.css"
import {useDispatch,useSelector} from "react-redux";
import { getProductDetails } from '../../actions/productAction';

const ProductDetails = ({match}) => {

    const{product,loading,error} = useSelector(state=>state.productDetails)

    const dispath =useDispatch();
    useEffect(()=>{
      
        dispath(getProductDetails(match.params.id));
    }, [dispath,match.params.id])
  return (
    <Fragment>
        <div className='ProductDetails'>
            <div>
                <Carousel>
                    {
                        product.images &&
                        product.images.map((item,i)=>
                            <img
                                className="CarouselImg" 
                                key={item.url} 
                                src={item.url} 
                                alt={`${i} Slide`}
                            />
                        )}
                </Carousel>
            </div>
        </div>
    </Fragment>
  )
}

export default ProductDetails