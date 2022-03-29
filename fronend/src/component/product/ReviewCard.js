import React from 'react'
import ReactStars from 'react-rating-stars-component';
import profilePng from "../../images/user.png";

const ReviewCard = ({review}) => {

    const options ={
        edit:false,
        color:"#808080",
        activeColor:"tomato",
        size: window.innerWidth < 600 ? 20:15,
        value: review.ratings,
        isHalf:true,
       
    };

  return (
    <div className='reviewCard'>
        <img src ={profilePng} alt ="User"/>
        <p>{review.name}</p>
        <ReactStars {...options}/>
        <span>{review.comment}</span>
    </div>
  )
};

export default ReviewCard