import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ${item.price}$`}</span>
      </div>
      <div>
      <AiTwotoneDelete className="deleteIcon"   onClick={() => deleteCartItems(item.product)}/>
      </div>
    </div>

  );
};

export default CartItemCard;
