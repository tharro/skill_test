import Api from '../index';
import  * as ApiConstants from '../ApiConstants';

export default function getUser() {
  return Api(
    ApiConstants.ApiGetUser.USER,
    null,
    'get',
    null,
  );
}
