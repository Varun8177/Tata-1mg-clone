import *as types from './admin.types'

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
            console.log(payload)
            return { ...state, products: [payload, ...state.products] }
        default:
            return state
    }
}
export default AdminReducer