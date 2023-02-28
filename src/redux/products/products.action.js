import axios from "axios";
import * as types from './products.actionTypes';

export const getData = (sort, order) => async (dispatch) => {
    dispatch({ type: types.REQUEST_SUCCESS })
    try {
        let result = await axios.get(`https://health-prime.onrender.com/products?_sort=${sort}&_order=${order}`);
        dispatch({ type: types.GET_PRODUCT_REQUEST, payload: result.data })
        return result.data;
    } catch (error) {
        dispatch({ type: types.REQUEST_ERROR, payload: error.message })
    }
}

