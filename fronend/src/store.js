import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import{ composeWithDevTools } from "redux-devtools-extension";
import { productReducer,productDetailsReducer} from "./reducers/productReducer";


const reducer = combineReducers({
    productDetails: productDetailsReducer,
    products: productReducer,
  
   
});

let initialState ={};

const middleware =[thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;