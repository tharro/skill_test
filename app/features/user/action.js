import * as types from "./actionTypes";

export function requestUser(){
    return {
        type: types.USER_REQUEST
    }
}

export function getUserFailed(){
    return {
        type: types.USER_FAILED
    };
}

export function getUserRespone(response){
    return {
        type: types.USER_RESPONSE,
        response
    };
}

export function getUserLoadingEnable(){
    return {
        type: types.USER_ENABLE_LOADER
    };
}
export function getUserLoadingDisable(){
    return {
        type: types.USER_DISABLE_LOADER
    };
}