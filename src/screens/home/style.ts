import {StyleSheet} from 'react-native';
import { Typo } from '../../configs/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1E26',
    height:'100%'

  },

  header:{ flexDirection: 'row', marginTop: 10, marginVertical: 30, justifyContent: 'space-between', alignItems: 'center' },
  notificationContainer:{ flexDirection: 'row', alignItems: 'center' }
});


const scrollViewStyles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20
  }
});

const lessonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#2F3540',
    height: 200,
    width: '100%',
    borderRadius: 20,
    paddingLeft: 20,
    paddingVertical: 20,
    flexWrap: 'wrap'
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    paddingLeft: 10,
    paddingVertical:10
  },
  startLearningButton: {
    flexDirection: 'row',
    backgroundColor: '#BBECED',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderRadius: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginTop:15
  },
  playButton: {
    width: 30,
    height: 30,
    backgroundColor: '#4CA6A8',
    borderRadius: 30,
  },
  yorubIcon: {
    marginLeft: 14
  }
});

const reviewStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF5DC',
    alignItems: 'center',
    marginVertical: 40,
    borderRadius: 20,
    height: 100
  },
  icon: {
    marginHorizontal: 20
  }
});

const leaderboardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'space-between'
  },
  text: {
    ...Typo('white', 16, 24, '700').text
  }
});

const upgradeStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: "#BBECED",
    height: 56,
    borderRadius: 50
  }
});

export{
  styles,
  scrollViewStyles,
  upgradeStyles,
  leaderboardStyles,
  reviewStyles,
  lessonStyles,
}