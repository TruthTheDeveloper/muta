import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import {Back, Facebook, Google} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {Hscreen} from '../../containers';
import {validateEmail} from '../../helpers/general';
import {Hheader} from '../../presenters';
import { addEmail } from '../../redux/auth/authSlice';
import { AppDispatch } from '../../redux/store';
import {AppButton, AppText} from '../../reusables';
import AppSignUpInput from '../../reusables/app-signup-Input';
import AuthButton from '../../reusables/auth-button';
import {NavigatorScreenProps} from '../../routers/navigation/types';
import {routes} from '../../routers/router-constants/routes';
import {
  authButtonStyles,
  backIconStyles,
  dividerStyles,
  loginButtonStyles,
  signupTextStyles,
  styles,
} from './styles';


const Login = ({navigation}: NavigatorScreenProps) => {
  const [email, setEmail] = useState<string>('');
  const [notInputValid, setNotInputValid] = useState<boolean>(true);

  const dispatch = useDispatch<AppDispatch>();

 

  

  useEffect(() => {
    setNotInputValid(!(validateEmail(email).length === 0));
  }, [email]);


  useEffect(() => {
   
    dispatch(addEmail(email));

    
  }, [ email]);

  return (
    <Hscreen>
      <Hheader
        text="Login in to Muta"
        onPressLeftAction={() => navigation.goBack()}
      />

      <View style={authButtonStyles.container}>
        <AuthButton icon={<Google />} text={'SIGN UP WITH GOOGLE'} />
        <AuthButton icon={<Facebook />} text={'SIGN UP WITH FACEBOOK'} />
      </View>

      <View style={dividerStyles.container}>
        <View style={dividerStyles.line}></View>
        <AppText
          text={'OR'}
          color={pallete.light}
          styles={dividerStyles.text}
        />
        <View style={dividerStyles.line}></View>
      </View>
      <AppSignUpInput
        fieldName="Enter email address"
        text={email}
        onChange={setEmail}
      />
      <AppButton
        text="LOG IN WITH EMAIL"
        style={loginButtonStyles.button}
        textColor={'black'}
        onPress={() => navigation.navigate(routes.LoginField)}
        disabled={notInputValid}
      />

      <View style={signupTextStyles.container}>
        <AppText text={'Don’t have a Muta account?'} color={pallete.light} />

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(routes.SignUp)}>
          <AppText
            text={'Sign Up'}
            color="#4CA6A8"
            styles={signupTextStyles.signup}
          />
        </TouchableWithoutFeedback>
      </View>
    </Hscreen>
  );
};

export default Login;
