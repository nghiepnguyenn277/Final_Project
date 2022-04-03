import axios from "axios";
import {
    All_PRODUCT_REQUEST,
    All_PRODUCT_SUCCESS,
    All_PRODUCT_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,

    CLEAR_ERRORS, } from "../constants/productConstant";

// getall
export const getProduct =(keyword = "",currentPage = 1) => async (dispatch)=>{  
    try
    {
        
        dispatch({ type:All_PRODUCT_REQUEST});

        let link = `/api/v1/products?keyword =${keyword}&page =${currentPage}`;

        const {data} = await axios.get(link);
        
        dispatch({
            type: All_PRODUCT_SUCCESS,
            payload:data,

    })
    }catch(error){
        dispatch({
            type:All_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    };
};

//get details
export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/product/${id}`);
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Clear Error
export const clearError =() =>async (dispatch)=>{
    dispatch({type: CLEAR_ERRORS});
};