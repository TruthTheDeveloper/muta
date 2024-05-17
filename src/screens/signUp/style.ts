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

const authButtonsStyles = StyleSheet.create({
  container: {
    marginTop: 40
  }
});

const dividerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 50
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#848A99',
  }
});

const signUpButtonStyles = StyleSheet.create({
  button: {
    marginBottom: 20,
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
    marginVertical: 50,
    borderWidth: 1,
    borderColor: 'grey'
  }
});

const loginTextStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom:24
  }
});

export{
  loginTextStyles,
  signUpButtonStyles,
  dividerStyles,
  authButtonsStyles,
  backIconStyles,
  scrollViewStyles,
  styles
}
