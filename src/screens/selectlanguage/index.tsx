import React, { useState } from 'react';
import { View } from 'react-native';
import { Back, English, French, Portuguese, Spanish } from '../../assets/svg';
import { Hscreen } from '../../containers';
import { Hheader } from '../../presenters';
import { AppButton } from '../../reusables';
import LanguageButton from '../../reusables/language-button';
import { NavigatorScreenProps } from '../../routers/navigation/types';
import { routes } from '../../routers/router-constants/routes';
import { styles } from './style';


interface Language {
  logo: React.ReactElement;
  text: string;
  id:string;
}


const languages:Language[] = [
  { logo: <English/>, text: 'I speak English', id: 'English' },
  { logo: <French/>, text: 'Je parle Français', id: 'French' },
  { logo: <Portuguese/>, text: 'Eu falo Português', id: 'Portuguese' },
  { logo: <Spanish/>, text: 'Yo hablo Español', id: 'Spanish' },
];

const SelectLanguage = ({navigation}: NavigatorScreenProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <Hscreen>
      <Hheader
        text=""
        onPressLeftAction={() => navigation.goBack()}
      />
        {languages.map((language) => (
          <LanguageButton
            key={language.id}
            logo={language.logo}
            text={language.text}
            isChecked={selectedLanguage === language.id}
            onPress={() => setSelectedLanguage(language.id)}
          />
        ))}
        <AppButton
          text="CONTINUE"
          style={styles.continueButton}
          textColor={'black'}
          onPress={() => navigation.navigate(routes.PickLearn)}
        />
    </Hscreen>
  );
};

export default SelectLanguage;
