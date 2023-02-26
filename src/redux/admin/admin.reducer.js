import *as types from './admin.types'
// import * as types2 from '../products/products.actionTypes'
const initialState = {
    loading: false,
    error: false,
    products: [],
    cart: []
}

const AdminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOADING:
            return { ...state, loading: true }
        case types.ERROR:
            return { ...state, error: true, loading: false }
        case types.GETPRODUCTS:
            return { ...state, products: payload, loading: false }
        case types.FILTERPRODUCTS: {
            return { ...state, products: payload, loading: false }
        }
        case types.DELETEPRODUCT: {
            let x = state.products.filter((item) => {
                return item.id !== payload.id
            })
            return { ...state, products: x }
        }
        case types.UPDATEPRODUCT: {
            return {
                ...state, products: state.products.map((item) =>
                    item.id === payload.id ? payload : item)
            }
        }
        case types.ADDPRODUCT:
            return { ...state, products: [payload, ...state.products] }
        case types.AddCartItem:
            return { ...state, cart: [payload, ...state.cart] }
        case types.DeleteCartItem: {
            let x = state.cart.filter((item) => {
                return item.id !== payload.id
            })
            return { ...state, cart: x }
        }
        default:
            return state
    }
}
export default AdminReducer