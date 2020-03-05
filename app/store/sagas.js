/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import { all } from 'redux-saga/effects';
import { userSagas } from '../features/user/saga/';

// export default [loginSaga];

export default function* rootSaga() {
    yield all([...userSagas]);
}
