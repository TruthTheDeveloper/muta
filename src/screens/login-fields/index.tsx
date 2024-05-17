import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Back} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {Hscreen} from '../../containers';
import {validateEmail, validatePassword} from '../../helpers/general';
import {Hheader} from '../../presenters';
import {addEmail, addPassword} from '../../redux/auth/authSlice';
import {RootState} from '../../redux/store';
import {AppButton, AppText} from '../../reusables';
import AppSignUpInput from '../../reusables/app-signup-Input';
import {NavigatorScreenProps} from '../../routers/navigation/types';
import {routes} from '../../routers/router-constants/routes';

import {
  backIconStyles,
  loginButtonStyles,
  scrollViewStyles,
  signupTextStyles,
  styles,
} from './style';
import useLogin from './useLogin';

const LoginField = ({navigation}: NavigatorScreenProps) => {
  const [, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notInputValid, setNotInputValid] = useState<boolean>(true);
  const [isSecure, setIsSecure] = useState(true);

  const dispatch = useDispatch();

  const {loading, _handleLogin} = useLogin();

  const {
    userSignInCredentials: {email},
  } = useSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    if (email.length >= 1 && password.length >= 1) {
      if (
        validateEmail(email).length === 0 &&
        validatePassword(password).length === 0
      ) {
        setNotInputValid(false);
      }
    }
  }, [password, email]);

  return (
    <Hscreen>
      <Hheader
        text="Enter Your Password"
        onPressLeftAction={() => navigation.goBack()}
      />

      <AppSignUpInput fieldName="Email" text={email} onChange={setEmail} />
      <AppSignUpInput
        fieldName="Password"
        secure={isSecure}
        changeSecure={() => setIsSecure(!isSecure)}
        text={password}
        onChange={setPassword}
      />

      <AppButton
        text={loading ? 'LOADING...' : 'LOG IN'}
        style={loginButtonStyles.button}
        textColor={'black'}
        onPress={() => _handleLogin()}
        disabled={notInputValid}
      />

      <View style={signupTextStyles.container}>
        <AppText text={"Don't have a Muta account "} color={pallete.light} />
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

export default LoginField;
