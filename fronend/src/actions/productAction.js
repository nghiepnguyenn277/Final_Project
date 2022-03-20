import axios from "axios"
import {
    All_PRODUCT_REQUEST,
    All_PRODUCT_SUCCESS,
    All_PRODUCT_FALL,
    CLEAR_ERRORS } from "../constants/productConstant";


export const getProduct =() =>async (dispatch)=>{
    try{
        dispatch({
            type:All_PRODUCT_REQUEST
        });

    const {data} =await axios.get("/api/v1/products");

    dispatch({
        type: All_PRODUCT_SUCCESS,
        payload:data

    })

    }catch(error){
        dispatch({
            type:All_PRODUCT_FALL,
            payload: error.response.data.message,
        });
    };
};
// Clear Error
export const clearError =() =>async (dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS, 
       
    })

};