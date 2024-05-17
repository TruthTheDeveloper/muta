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
    marginBottom: 20
  }
});

const inputFieldsStyles = StyleSheet.create({
  container: {
    marginBottom: 0
  }
});

const signUpButtonStyles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#4CA6A8',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom:24
  }
});

const loginTextStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});


export {
  styles,
  scrollViewStyles,
  backIconStyles,
  inputFieldsStyles,
  signUpButtonStyles,
  loginTextStyles
}
