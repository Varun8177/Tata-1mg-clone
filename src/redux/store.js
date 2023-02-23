import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux"
import thunk from 'redux-thunk'
import {reducer as authReducer} from "./auth/reducer"

const rootReducer = combineReducers({authReducer,
})

export const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))