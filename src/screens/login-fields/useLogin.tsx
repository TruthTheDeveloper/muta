import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, reset, seenAuser, signUp} from '../../redux/auth/authSlice';
import {AppDispatch, RootState} from '../../redux/store';


const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {signUpFailure, signUpSuccess, loading, signInFailure, signInSuccess} = useSelector(
    (state: RootState) => state.authReducer,
  );

  const {
    userSignInCredentials: {
      email,
      password
    },
  } = useSelector((state: RootState) => state.authReducer);

  // useEffect(() => {
  //   console.log('Dog')
  //   if (signInSuccess) {
  //     seenAuser(true)
  //   console.log('Dog')

  //     reset()
  //   } 
  // }, [signInSuccess,loading]);




  const _handleLogin = async (
  ) => {
    dispatch(
      login({
        email: email,
        password:password
      }),
    );
  };

  return {loading, _handleLogin};

};

export default useLogin;
