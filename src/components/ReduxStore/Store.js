import { configureStore } from "@reduxjs/toolkit";

export const SIGN_IN_ACTION = 'signIn';


const userReducer = (state = null, action) => {
    switch(action.type){
        case SIGN_IN_ACTION:
            return action.payload.userData
        default:
            return state
    }
}

const store = configureStore({
    reducer: {
        user : userReducer,

    }
})

export default store;