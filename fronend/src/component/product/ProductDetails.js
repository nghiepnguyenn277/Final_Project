import React, { Fragment, useEffect } from 'react'
import Carousel from "react-material-ui-carousel"
import "./ProductDetails.css"
import {useDispatch,useSelector} from "react-redux";
import { getProductDetails } from '../../actions/productAction';
import ReactStars from "react-rating-stars-component"
import ReviewCard from "./ReviewCard"


const ProductDetails = ({match}) => {


    const{product,loading,error} = useSelector(state=>state.productDetails)

    const dispath =useDispatch();
    useEffect(()=>{
      
        dispath(getProductDetails(match.params.id));
    }, [dispath,match.params.id])

    const options ={
        edit:false,
        color:"#808080",
        activeColor:"tomato",
        size: window.innerWidth < 600 ? 20:15,
        value: product.ratings,
        isHalf:true,
       
    };

  return (
    <Fragment>
        <div className='ProductDetails'>
            <div>
                <Carousel>
                    {
                        product.images && product.images.map((item, i)=>(
                            <img
                                className="CarouselImg" 
                                key={item.url} 
                                src={item.url} 
                                alt={`${i} Slide`}
                            />
                        ))}
                </Carousel>
            </div>
                <div>
                    <div className='detailsBlock1'>
                        <h2>{product.name}</h2>
                     
                    </div>
                    <div className='detailsBlock2'>
                        <ReactStars {...options}/>
                        <span>({product.numOfReviews} Review)</span>
                    </div>
                    <div className='detailsBlock3'>
                        <h1>{`${product.price}$`}</h1>
                        <div className='detailsBlock3-1'>
                            <div className='detailsBlock3-1-1'>
                                <button>-</button>
                                <input value= "1" type="number"/>
                                <button>+</button>
                            </div>{" "}
                            <button> Add to Cart</button>
                        </div>
                        <p>
                            Status:{" "}
                                <b className={product.Stock < 1 ? "redColor":"greenColor"}>
                                    {product.Stock <1 ? "Out Of Stock":"In Stock"}
                                </b>
                        </p>
                    </div>
                    <div className='detailsBlock4'>
                        Description: <p>{product.description}</p>
                    </div>
                     <button className='submit'> Submit Review</button>
                </div>
          </div>
          <h3 className='reviewHeading'>REVIEWS</h3>
                {product.reviews && product.reviews[0] ? (
                    <div className='reviews'>
                        {product.reviews && product.reviews.map((review)=>
                        <ReviewCard review ={review}/>
                        )}
                    </div>
                ):(
                    <p className='NullReview'>
                        No review yet
                    </p>
                )}
    </Fragment>
  );
};

export default ProductDetails