import axios from "axios";
import * as types from './products.actionTypes';

export const getData = (sort, order) => async (dispatch) => {
    dispatch({ type: types.REQUEST_SUCCESS })
    try {
        let result = await axios.get(`https://dead-earrings-tick.cyclic.app/products?_sort=${sort}&_order=${order}`);
        // let result = await axios.get(`https://dead-earrings-tick.cyclic.app/products?_sort=price&_order=desc`);
        dispatch({ type: types.GET_PRODUCT_REQUEST, payload: result.data })
        return result.data;
    } catch (error) {
        dispatch({ type: types.REQUEST_ERROR, payload: error.message })
    }
}

