import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux"
import thunk from 'redux-thunk'
import { reducer as authReducer } from "./auth/reducer"
import AdminReducer from "./admin/admin.reducer"
import ProductReducer from "./products/products.reducer"
import adressReducer from "./adress/adress.reducer"
const rootReducer = combineReducers({
    authReducer,
    AdminReducer,
    adressReducer,
    ProductReducer
})

export const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))