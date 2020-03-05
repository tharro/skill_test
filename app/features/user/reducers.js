import createReducer from '../../lib/createReducer';
import * as types from "./actionTypes";

const initialState = {
    isLoading: false,
    user_data: []
}

export const userReducers = createReducer(initialState, {
    [types.USER_REQUEST](state){
        return {
            ...state
        };
    },

    [types.USER_RESPONSE](action, state){
        return {
            ...state,
            user_data: action.response
        };
    },

    [types.USER_FAILED]( state){
        return {
            ...state,
        };
    },

    [types.USER_ENABLE_LOADER]( state){
        return {
            ...state,
            isLoading: true
        };
    },

    [types.USER_DISABLE_LOADER]( state){
        return {
            ...state,
            isLoading: false
        };
    }

});