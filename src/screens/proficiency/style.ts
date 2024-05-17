import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1E26',

  },
  backButton: {
    marginBottom: 20
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

const ratingInputsStyles = StyleSheet.create({
  container: {
      marginVertical: 50
  }
});

const continueButtonStyles = StyleSheet.create({
  button: {
      width: '100%',
      backgroundColor: '#4CA6A8',
      marginTop: 100
  }
});


export{
  styles,
  continueButtonStyles,
  ratingInputsStyles,
  backIconStyles,
  scrollViewStyles,
  
}
