import *as types from './admin.types'

const initialState = {
    loading: false,
    error: false,
    products: []
}

const AdminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOADING:
            return { ...state, loading: true }
        case types.ERROR:
            return { ...state, error: true, loading: false }
        case types.GETPRODUCTS:
            return { ...state, products: payload, loading: false }
        default:
            return state
    }
}
export default AdminReducer