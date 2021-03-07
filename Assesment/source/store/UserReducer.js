import React, { useReducer } from 'react'
import { STORE_USER_NAME  } from './UserAction'

const initialState = {
    userName: null
}


const userReducer = (state, action) => {
    switch (action.type) {
        case STORE_USER_NAME:
            return {
                ...state,
                userName: action.payload
            }
            break
        default:
            return state    
    }
}

export const getReducer = () => {
    return useReducer(userReducer, initialState);
};