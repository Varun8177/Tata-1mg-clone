import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux"
import thunk from 'redux-thunk'
import AuthReducer from "./auth/reducer"
import AdminReducer from "./admin/admin.reducer"

const rootReducer = combineReducers({
    AuthReducer,
    AdminReducer
})

export const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))