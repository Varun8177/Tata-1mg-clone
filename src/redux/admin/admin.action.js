import axios from 'axios'
import *as types from './admin.types'


export const GetRequest = () => async (dispatch) => {
    dispatch({ type: types.LOADING })
    try {
        const res = await axios.get(`https://dead-earrings-tick.cyclic.app/vitamins-suppliments`)
        dispatch({ type: types.GETPRODUCTS, payload: res.data })
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}