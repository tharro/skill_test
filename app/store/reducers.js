/* 
 * combines all th existing reducers
 */
import * as userReducers from '../features/user/reducers';
export default Object.assign({}, userReducers);
