import {apiRoutes} from '../../https/apiRoute';
import {make_request} from '../../https/request';

const login = async (payload: object) =>{
  
  const response  = await make_request('post', apiRoutes.login, payload);
  return response
}



const signUp = async (payload: object) => {
  console.log('1st got in ');
  const response = await make_request('post', apiRoutes.signUp, payload);
  console.log('2nd fetched ', JSON.stringify(response, null, 2));
  return response
};

const AuthService = {
  login,

  signUp,
};

export default AuthService;
