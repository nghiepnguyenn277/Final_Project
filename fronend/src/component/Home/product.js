import React from 'react'
import { Link } from "react-router-dom"
import ReactStars from "react-rating-stars-component"



const Product = ({product }) => {
  const options ={
    edit:false,
    color:"#808080",
    activeColor:"tomato",
    size: window.innerWidth < 600 ? 20:15,
    value: product.ratings,
    isHalf:true,
   
};
  return (
    <Link className='productCard' to ={product._id} >
          <img  src={product.images[0].url} alt={product.name}/>
          <p>{product.name}</p>
            <div>
               <ReactStars  {...options}/>{""}
                  <span>({product.numOfReviews} Review)</span>
            </div>
          
              <span>{`${product.price}$`}</span>                     
    </Link>
  );
};

export default Product