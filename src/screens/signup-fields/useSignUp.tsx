import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {seenAuser, signUp} from '../../redux/auth/authSlice';
import { reset } from '../../redux/global-store/storeSlice';
import {AppDispatch, RootState} from '../../redux/store';

const useSignUp = (setSignUpSucced:React.Dispatch<React.SetStateAction<boolean | null>>) => {
  const dispatch = useDispatch<AppDispatch>();
  const {signUpFailure, signUpSuccess, loading, signInFailure, signInSuccess} =
    useSelector((state: RootState) => state.authReducer);


    useEffect(() => {
      if (signUpSuccess) {
        // dispatch(seenAuser(true))
        
        setSignUpSucced(true)
        reset()
  
      } else if (signUpFailure) {
        // dispatch(seenAuser(false))
        console.log('failed')
        reset()
        // showToastFail()
  
      }
    }, [signUpFailure, signUpSuccess, loading]);
  

  const {
    userSignInCredentials: {
      firstname,
      lastname,
      email,
      password,
      signinType,
      spokenLanguage,
      userType,
      country: {name, code, flag},
    },
  } = useSelector((state: RootState) => state.authReducer);

  const _handleSignUp = async () => {
    console.log('HELLO');
    dispatch(
      signUp({
        firstname,
        lastname,
        email,
        password,
        signinType,
        spokenLanguage,
        userType,
        country: {
          name,
          code,
          flag,
        },
      }),
    );
  };

  console.log( signUpSuccess);

  return {loading, _handleSignUp};
};

export default useSignUp;
