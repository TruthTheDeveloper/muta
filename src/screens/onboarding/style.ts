import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1E26',
    borderTopRightRadius:190,
    marginTop:-15,
    paddingHorizontal:20
  },
});

const scrollViewStyles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1
  }
});

const imageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:150
  }
});

const contentStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:150
    // paddingHorizontal: 20
  }
});

const buttonStyles = StyleSheet.create({
  container: {
    paddingTop: 30
  },
  getStartedButton: {
    marginBottom: 30,
    width: '100%',
    backgroundColor: '#4CA6A8',
    borderRadius:10
  },
  loginButton: {
    marginBottom: 80,
    width: '100%',
    borderColor: '#4CA6A8',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 0.5,
    borderRadius:10
  }
});

const footerStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export{
  footerStyles,
  buttonStyles,
  contentStyles,
  imageStyles,
  scrollViewStyles,
  styles
}
