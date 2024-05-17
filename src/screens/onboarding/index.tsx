import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Land } from '../../assets/svg';
import { pallete } from '../../configs/Colors';
import { Typo } from '../../configs/Typography';
import { Hscreen } from '../../containers';
import { AppButton, AppText } from '../../reusables';
import { NavigatorScreenProps } from '../../routers/navigation/types';
import { routes } from '../../routers/router-constants/routes';
import { buttonStyles, contentStyles, footerStyles, imageStyles, styles } from './style';

const Onboarding = ({navigation}: NavigatorScreenProps) => {
  return (
    <Hscreen hasPadding={false}>
      
        <View style={imageStyles.container}>
          <Land  />
        </View>
        <View style={styles.container}>
        <View style={contentStyles.container}>
          <View>
            <AppText
              text="Learn Languages from"
              fontSize={18}
              styles={{ opacity: 0.8, paddingLeft: 5 }}
              color={pallete.light}
            />
            <AppText
              text="Africa"
              color={pallete.light}
              styles={[Typo().h1, { paddingTop:50, }]}
              fontSize={64}
            />
            <View style={{paddingRight:40}}>
            <AppText
              text="Muta helps you learn African languages in the easiest way"
              color={'#ABB3C7'}
              styles={[Typo().text,{paddingBottom:40}]}
              fontSize={16}
              numberOfLines={2}
            />
            </View>
          </View>

          <View style={buttonStyles.container}>
            <AppButton text="GET STARTED" style={buttonStyles.getStartedButton} textColor="black" onPress={() => navigation.navigate(routes.SelectLanguage)}/>
            <AppButton text="LOG IN" style={buttonStyles.loginButton} textColor="#4CA6A8" onPress={() => navigation.navigate(routes.Login)}/>
          </View>

          <View style={footerStyles.container}>
            <AppText
              text="By continuing on this app, you agree to Muta’s"
              color={pallete.light}
              styles={{ textAlign: 'center' }}
            />
            <View style={footerStyles.textContainer}>
              <AppText text="Terms of Service " color="#4CA6A8" />
              <AppText text="and " color={pallete.light} />
              <AppText text=" Privacy Policy" color="#4CA6A8" />
            </View>
          </View>
        </View>
    </View>
    </Hscreen>
  );
};

export default Onboarding;


