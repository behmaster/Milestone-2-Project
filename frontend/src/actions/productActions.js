import axios from 'axios'

import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
    try {
      //want to dispatch the request.  pass in an object with a type.  This will call in the reducer
      dispatch({ type: PRODUCT_LIST_REQUEST })
      //we want to now make our request
      const { data } = await axios.get('/api/products')
  
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        //this is an if else statement  : = else
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }