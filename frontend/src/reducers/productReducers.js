import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

//handle state for product list we see on the home page (takes in inital state (object) and action) has a type eval below, and contain a payload that we fetch from the server.
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    //make the request
    case PRODUCT_LIST_REQUEST:
      //curently loading
      return { loading: true, products: [] };

    //successful resonse
    case PRODUCT_LIST_SUCCESS:
      //done loading done making a request as to why it is false
      return { loading: false, products: action.payload };

    //if it fails send error through the state
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
