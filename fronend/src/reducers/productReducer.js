

import {All_PRODUCT_REQUEST,
        All_PRODUCT_SUCCESS,
        All_PRODUCT_FALL,
        CLEAR_ERRORS } from "../constants/productConstant";

 
export const productReducer = (state = { products:[] },action) =>{ 
    switch(action.type){
        case All_PRODUCT_REQUEST:       
            return{
                    loading:true,
                    product:[]
            };
        case All_PRODUCT_SUCCESS:
            
            return{
                    loading:false,
                    products: action.payload.products,
                    productsCount: action.payload.productCount,
            };
        case All_PRODUCT_FALL:
                return{
                        loading:false,
                        error: action.payload.products,
                }
        case CLEAR_ERRORS:
                return{
                        ...state,
                        error:null,
                };
            default:
                return state;
     }
};
