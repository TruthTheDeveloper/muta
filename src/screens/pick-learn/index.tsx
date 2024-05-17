import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Amharic,
  Back,
  Fula,
  Hausa,
  Igbo,
  Oromo,
  Shona,
  Swahili,
  Yoruba,
  Zulu,
} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {Hscreen} from '../../containers';
import {Hheader} from '../../presenters';
import {AppButton, AppText} from '../../reusables';
import Languages from '../../reusables/languages';
import {NavigatorScreenProps} from '../../routers/navigation/types';
import {routes} from '../../routers/router-constants/routes';
import {
  backIconStyles,
  continueButtonStyles,
  languagesContainerStyles,
  scrollViewStyles,
  styles,
} from './style';

interface Language {
  Icon: React.ReactElement;
  language: string;
}

const languages: Language[] = [
  {Icon: <Swahili />, language: 'Swahili'},
  {Icon: <Amharic />, language: 'Amharic'},
  {Icon: <Yoruba />, language: 'Yoruba'},
  {Icon: <Fula />, language: 'Fula'},
  {Icon: <Igbo />, language: 'Igbo'},
  {Icon: <Hausa />, language: 'Hausa'},
  {Icon: <Oromo />, language: 'Oromo'},
  {Icon: <Zulu />, language: 'Zulu'},
  {Icon: <Shona />, language: 'Shona'},
];

const PickLearn: React.FC<NavigatorScreenProps> = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('Yoruba');

  return (
    <Hscreen>
      <Hheader
        text="I want to learn..."
        onPressLeftAction={() => navigation.goBack()}
      />

      <View style={languagesContainerStyles.container}>
        {languages.map(({Icon, language}) => (
          <Languages
            key={language}
            Icon={React.cloneElement(Icon, {
              fill: selectedLanguage === language ? '#4CA6A8' : '#ABB3C7',
            })}
            language={language}
            isSelected={selectedLanguage === language}
            onPress={() => setSelectedLanguage(language)}
          />
        ))}
      </View>

      <AppButton
        text="CONTINUE"
        style={continueButtonStyles.button}
        textColor={'black'}
        onPress={() => navigation.navigate(routes.Proficiency)}
      />
    </Hscreen>
  );
};

export default PickLearn;
