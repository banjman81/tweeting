import { configureStore } from "@reduxjs/toolkit";

export const SIGN_IN_ACTION = 'signIn';
export const SIGN_OUT_ACTION = 'signOut';
export const TWEET = 'tweet';

// const initialUser = JSON.parse(window.localStorage.getItem('applicationState')) || null


const userReducer = (state = null, action) => {
    switch(action.type){
        case SIGN_IN_ACTION:
            return action.payload
        case SIGN_OUT_ACTION:
            return state
        default:
            return JSON.parse(window.localStorage.getItem('applicationState'))?.user || state
    }
}

const tweetReducer = (state = [], action) => {
    
    switch(action.type){
        case TWEET:
            return [...state, action.payload]
        default:
            return JSON.parse(window.localStorage.getItem('applicationState'))?.tweets || state
    }
}

const store = configureStore({
    reducer: {
        user : userReducer,
        tweets : tweetReducer
    }
}, {
    user : JSON.parse(window.localStorage.getItem('applicationState'))
    })

function handleChange() {
    const newState = store.getState();

    window.localStorage.setItem('applicationState', JSON.stringify(newState))

    console.log('newState', newState)
}

store.subscribe(handleChange)

export default store;