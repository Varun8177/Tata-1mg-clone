import * as types from "./actionTypes";

const initialState = {
    isAuth: false,
    userName: null
}

const Authreducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.USER_LOGIN: {
            return { ...state, userName: payload, isAuth: true }
        }

        case types.USER_REGISTER: {
            return { ...state, userName: payload, isAuth: true }
        }
        case types.USER_STATUS_UPDATE: {
            return { ...state, userName: payload, isAuth: true }
        }
        case types.USER_LOGOUT: {
            return { ...state, userName: null, isAuth: false }
        }

        default: {
            return state
        }
    }

}

<<<<<<< HEAD
export default Authreducer;
=======
export {
    reducer
} ;
>>>>>>> 08ec100b9875bb80ab787aa0025c1629fb92f575
