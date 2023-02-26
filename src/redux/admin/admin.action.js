import axios from 'axios'
import *as types from './admin.types'


export const GetRequest = () => async (dispatch) => {
    dispatch({ type: types.LOADING })
    try {
        const res = await axios.get(`https://health-prime.onrender.com/vitamins-suppliments`)
        dispatch({ type: types.GETPRODUCTS, payload: res.data })
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}

export const FilterProd = (value) => async (dispatch) => {
    try {
        const res = await axios.get(`https://health-prime.onrender.com/vitamins-suppliments`)
        let x = res.data.filter((item) => {
            return item.use.includes(value);
        });
        dispatch({ type: types.FILTERPRODUCTS, payload: x })
    } catch (error) {
        dispatch({ type: types.ERROR })
    }

}

export const DeleteProd = (id) => async (dispatch) => {
    const res = await axios.get(`https://health-prime.onrender.com/vitamins-suppliments/${id}`)
    const deleteRes = await axios.delete(`https://health-prime.onrender.com/vitamins-suppliments/${id}`)
    if (res.data) {
        dispatch({ type: types.DELETEPRODUCT, payload: res.data })
    }
}

export const UpdateProd = (id, changes) => async (dispatch) => {
    const res = await axios.patch(`https://health-prime.onrender.com/vitamins-suppliments/${id}`, changes)
    if (res.data) {
        dispatch({ type: types.UPDATEPRODUCT, payload: res.data })
    }
}

export const AddProd = (details) => async (dispatch) => {
    const res = await axios.post(`https://health-prime.onrender.com/vitamins-suppliments/`, details)
    if (res.data) {
        dispatch({ type: types.ADDPRODUCT, payload: res.data })
    }
}