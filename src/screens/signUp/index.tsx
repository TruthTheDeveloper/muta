import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import {Back, Facebook, Google} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {Hscreen} from '../../containers';
import {validateEmail, validatePassword} from '../../helpers/general';
import { Hheader } from '../../presenters';
import { addEmail } from '../../redux/auth/authSlice';
import {AppButton, AppText} from '../../reusables';
import AppSignUpInput from '../../reusables/app-signup-Input';
import AuthButton from '../../reusables/auth-button';
import {NavigatorScreenProps} from '../../routers/navigation/types';
import {routes} from '../../routers/router-constants/routes';
import {
  authButtonsStyles,
  backIconStyles,
  dividerStyles,
  loginTextStyles,
  signUpButtonStyles,
  styles,
} from './style';

const SignUp = ({navigation}: NavigatorScreenProps) => {
  const [email, setEmail] = useState<string>('');
  const [notInputValid, setNotInputValid] = useState<boolean>(true);

  const dispatch = useDispatch();




  useEffect(() => {
    setNotInputValid(!(validateEmail(email).length === 0));
  }, [email]);


  useEffect(() => {
   
    dispatch(addEmail(email));

    
  }, [ email]);

  return (
    <Hscreen>
      <Hheader
        text="Sign up and start learning right away!"
        onPressLeftAction={() => navigation.goBack()}
      />
     
        <View style={authButtonsStyles.container}>
          <AuthButton icon={<Google />} text={'SIGN UP WITH GOOGLE'} />
          <AuthButton icon={<Facebook />} text={'SIGN UP WITH FACEBOOK'} />
        </View>

        <View style={dividerStyles.container}>
          <View style={dividerStyles.line}></View>
          <AppText
            text={'OR'}
            color={pallete.light}
            styles={{paddingHorizontal: 10, marginVertical: 50}}
          />
          <View style={dividerStyles.line}></View>
        </View>
        <AppSignUpInput
          fieldName="Enter email address"
          text={email}
          onChange={setEmail}
        />
        <AppButton
          text="SIGN UP WITH EMAIL"
          style={signUpButtonStyles.button}
          textColor={'black'}
          onPress={() => navigation.navigate(routes.SignUpFields)}
          disabled={notInputValid}
        />

        <View style={loginTextStyles.container}>
          <AppText text={'Already A Muta User?'} color={pallete.light} />

          <TouchableWithoutFeedback onPress={() => navigation.navigate(routes.SignUp)}>

          <AppText text={'Log In'} color="#4CA6A8" styles={{paddingLeft: 5}} />

          </TouchableWithoutFeedback>
        </View>
    </Hscreen>
  );
};

export default SignUp;
