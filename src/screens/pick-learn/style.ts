import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1E26',

  },
});

const scrollViewStyles = StyleSheet.create({
  contentContainer: {
      flexGrow: 1,
      margin: 20
  }
});

const backIconStyles = StyleSheet.create({
  icon: {
      marginBottom: 10
  }
});

const languagesContainerStyles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
  }
});

const continueButtonStyles = StyleSheet.create({
  button: {
      width: '100%',
      backgroundColor: '#4CA6A8',
      marginVertical: 50
  }
});


export {
  styles,
  continueButtonStyles,
  languagesContainerStyles,
  backIconStyles,
  scrollViewStyles
}
