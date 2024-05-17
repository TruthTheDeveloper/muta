import React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowDown, ArrowOpen, Book, Health, Level, Notification, Play, ProfilePic, Progress, Unlock, Yorub } from '../../assets/svg';
import { pallete } from '../../configs/Colors';
import { Typo } from '../../configs/Typography';
import { Hscreen } from '../../containers';
import { useColors } from '../../hooks/useColor';
import { AppButton, AppText } from '../../reusables';
import AppLeaderBoard from '../../reusables/app-leader-board';
import { leaderboardStyles, lessonStyles, reviewStyles, scrollViewStyles, styles, upgradeStyles } from './style';

const Home = () => {

  
  return (
    <Hscreen>
      <View style={styles.container}>
      
        <View style={styles.header}>
          <View style={lessonStyles.container}>
            <AppText text={'Yoruba Lesson'} color={pallete.light} />
            <ArrowDown />
          </View>

          <View style={styles.notificationContainer}>
            <Notification />
            <ProfilePic />
          </View>
        </View>

        <View style={lessonStyles.card}>
          <View style={lessonStyles.details}>
            <Level />
            <AppText text="Intermediate" color="white" styles={lessonStyles.text} />
          </View>
          <View style={lessonStyles.details}>
            <Book />
            <AppText text="lesson2" color="white" styles={lessonStyles.text} />
          </View>
          <Progress />
          <TouchableOpacity style={lessonStyles.startLearningButton}>
            <AppText text="Start Learning" styles={{marginLeft:10}}/>
            <View style={lessonStyles.playButton}>
              <Play style={{margin:'auto'}}/>
            </View>
          </TouchableOpacity>
          <View style={lessonStyles.yorubIcon}>
            <Yorub />
          </View>
        </View>

        <View style={reviewStyles.container}>
          <Health style={reviewStyles.icon} />
          <AppText text={"Review your most recent lesson"} fontSize={18} color="#2F3540" styles={[Typo(null, null, 24, '700').text, { width: 150 }]} />
          <ArrowOpen style={{marginLeft:'auto', marginRight:15}}/>
        </View>

        <View style={leaderboardStyles.container}>
          <AppText text={'Leaderboard'} fontSize={16} color={pallete.light} styles={leaderboardStyles.text} />
          <ArrowOpen />
        </View>

        <AppLeaderBoard />
        <AppLeaderBoard />
        <AppLeaderBoard />
        <AppLeaderBoard high={true} />

        <TouchableOpacity style={upgradeStyles.button}>
          <Unlock style={{marginLeft:35, marginTop:10}}/>
          <AppText text={"Upgrade now to unlock all lessons"} color={"#1B1E26"} styles={[Typo(null, null, 24, '500').text, { marginLeft: 20, marginVertical:'auto' }]} fontSize={14} />
        </TouchableOpacity>
    </View>
    </Hscreen>
    
  );
};

export default Home;


