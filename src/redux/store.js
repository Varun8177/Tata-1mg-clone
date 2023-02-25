import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux"
import thunk from 'redux-thunk'
import AuthReducer from "./auth/reducer"
import AdminReducer from "./admin/admin.reducer"
import ProductReducer from "./products/products.reducer"

const rootReducer = combineReducers({
<<<<<<< HEAD
    AuthReducer,
    AdminReducer
=======
    authReducer,
    AdminReducer,
    ProductReducer
>>>>>>> 08ec100b9875bb80ab787aa0025c1629fb92f575
})

export const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))