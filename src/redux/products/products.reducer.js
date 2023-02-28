import * as types from "./products.actionTypes";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
};

const ProductReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_PRODUCT_REQUEST: {
            return { ...state, isLoading: false, products: payload }
        }
        case types.REQUEST_SUCCESS: {
            return { isLoading: true, isError: false }
        }
        case types.REQUEST_ERROR: {
            return { ...state, isLoading: false, isError: true }
        }
        case types.REQUEST_FILTER: {
            let res = state.products.filter((item) => {
                return item.title.split(' ').join("").trim().toLowerCase().indexOf(payload) !== -1 ? true : false;
            })
            return {
                ...state, products: res
            }
        }

        default: {
            return state;
        }
    }
}

export default ProductReducer;