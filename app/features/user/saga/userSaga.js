/* Redux saga class */
import { put, call } from 'redux-saga/effects';
import {Alert} from "react-native";
import getUser from '../../../api/methods/getUser';
import * as getUserActions from '../action';

// Our worker Saga that logins the user
export default function* userAsync() {

    yield put(getUserActions.getUserLoadingEnable());
    //how to call api
    const response = yield call(getUser);
    if(response!==undefined){
        yield put(getUserActions.getUserRespone(response));
        yield put(getUserActions.getUserLoadingDisable({}));
    }
    else{ 
        yield put(getUserActions.getUserFailed());
        yield put(getUserActions.getUserLoadingDisable({}));
        Alert.alert("Message","Load Error!");
    }
}
