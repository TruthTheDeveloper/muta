import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Back} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {Hscreen} from '../../containers';
import {validateEmail, validatePassword} from '../../helpers/general';
import {Hheader} from '../../presenters';
import {addEmail, addFirstName, addLastName, addPassword, signUp} from '../../redux/auth/authSlice';
import { RootState } from '../../redux/store';
import {AppButton, AppText} from '../../reusables';
import AppSignUpInput from '../../reusables/app-signup-Input';
import {NavigatorScreenProps} from '../../routers/navigation/types';
import {routes} from '../../routers/router-constants/routes';

import {
  backIconStyles,
  inputFieldsStyles,
  loginTextStyles,
  signUpButtonStyles,
  styles,
} from './styles';
import useSignUp from './useSignUp';

const SignUpFields = ({navigation}: NavigatorScreenProps) => {
  const [, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [notInputValid, setNotInputValid] = useState<boolean>(true);
  const [signUpSucced, setSignUpSucced] = useState<boolean | null>(null)
  const [isSecure, setIsSecure] = useState(true)
  
  const {
    userSignInCredentials: {
      email,
  }} = useSelector((state: RootState) => state.authReducer)


  useEffect(() => {
   
    dispatch(addEmail(email));
    dispatch(addFirstName(firstname));
    dispatch(addPassword(password));
    dispatch(addLastName(lastname));


    
  }, [ email, password, firstname, lastname]);




  const dispatch = useDispatch();


  const {loading, _handleSignUp} = useSignUp(setSignUpSucced);

  useEffect(() => {
    if(email.length >= 1 && password.length >= 1){


      if(validateEmail(email).length === 0 && validatePassword(password).length === 0 && firstname.length >= 1 && lastname.length >= 1){
        setNotInputValid(false)
      }


    }

  }, [email, password]);

  useEffect(() => {
    dispatch(addFirstName(firstname));
    dispatch(addLastName(lastname));
    dispatch(addEmail(email));

    
  }, [firstname, lastname, email]);

  useEffect(() => {
    setSignUpSucced(null)
    if(signUpSucced){
      navigation.navigate(routes.Login)
    }
  },[signUpSucced])
  return (
    <Hscreen>
      <Hheader
        text="Enter name and password"
        onPressLeftAction={() => navigation.goBack()}
      />
      <View style={inputFieldsStyles.container}>
        <AppSignUpInput fieldName="Email" text={email} onChange={setEmail} />
        <AppSignUpInput
          fieldName="First name"
          text={firstname}
          onChange={setFirstName}
        />
        <AppSignUpInput
          fieldName="Last name"
          text={lastname}
          onChange={setLastName}
        />
        <AppSignUpInput
          fieldName="Password"
          secure={isSecure}
          changeSecure={() => setIsSecure(!isSecure)}
          text={password}
          onChange={setPassword}
        />
        
      </View>

      <AppButton
        text={loading ? "LOADING..." : "SIGN UP WITH EMAIL"}
        style={signUpButtonStyles.button}
        textColor={'black'}
        // onPress={() => navigation.navigate(routes.Login)}
        onPress={() => _handleSignUp()}
        disabled={notInputValid}
      />

      <View style={loginTextStyles.container}>
        <AppText text={'Already A Muta User?'} color={pallete.light} />
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(routes.Login)}>
          <AppText text={'Log In'} color="#4CA6A8" styles={{paddingLeft: 5}} />
        </TouchableWithoutFeedback>
      </View>
    </Hscreen>
  );
};

export default SignUpFields;
