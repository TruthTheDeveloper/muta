import React, {useState} from 'react';
import {View} from 'react-native';
import {Back, Beginner, Confirm, Intermediate, Novice} from '../../assets/svg';
import {Hscreen} from '../../containers';
import {Hheader} from '../../presenters';
import {AppButton, AppText} from '../../reusables';
import SelectRatingInput from '../../reusables/select-rating-input';
import {NavigatorScreenProps} from '../../routers/navigation/types';
import {routes} from '../../routers/router-constants/routes';
import {continueButtonStyles, ratingInputsStyles, styles} from './style';

const Proficiency = ({navigation}: NavigatorScreenProps) => {
  const [selectedRating, setSelectedRating] = useState('Novice');

  return (
    <Hscreen>
      <Hheader
        text="How would you rate your proficiency in Yoruba?"
        onPressLeftAction={() => navigation.goBack()}
      />

      <View style={ratingInputsStyles.container}>
        <SelectRatingInput
          Icon={<Novice />}
          Text={'Novice'}
          subText={'I’m new to Yoruba'}
          isSelected={selectedRating === 'Novice'}
          onPress={() => setSelectedRating('Novice')}
        />
        <SelectRatingInput
          Icon={<Beginner />}
          Text={'Beginner'}
          subText={'I know some words in Yoruba'}
          isSelected={selectedRating === 'Beginner'}
          onPress={() => setSelectedRating('Beginner')}
        />
        <SelectRatingInput
          Icon={<Intermediate />}
          Text={'Intermediate'}
          subText={'I can have simple conversations in Yoruba '}
          isSelected={selectedRating === 'Intermediate'}
          onPress={() => setSelectedRating('Intermediate')}
        />
      </View>

      <AppButton
        text="CONTINUE"
        style={continueButtonStyles.button}
        textColor={'black'}
        onPress={() => navigation.navigate(routes.SignUp)}
      />
    </Hscreen>
  );
};

export default Proficiency;
