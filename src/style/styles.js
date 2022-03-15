import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerVertical: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    // alignItems: 'center',
    // backgroundColor: '#0e101c',
  },
  containerHorizontal: {
    flex: 1,
    justifyContent: 'flex-start',
    // justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  containerScrollView: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },

  // button: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   width: 150,
  //   height: 50,
  //   marginTop: 50,
  //   padding: 10,
  //   borderRadius: 5,
  //   backgroundColor: 'powderblue',
  // },
  text: {
    big: {
      fontSize: 30,
      marginBottom: 20,
    },
    middel: {
      fontSize: 20,
      marginBottom: 15,
    },
    small: {
      fontSize: 15,
      marginBottom: 10,
    },
    good: {
      color: '#03c75a',
    },
    bad: {
      color: 'red',
    },
  },
  label: {
    color: 'black',
    margin: 10,
    marginLeft: 0,
    alignSelf: 'flex-start',
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#03c75a',
    borderRadius: 4,
    // width: 10
  },
  buttonLabel: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: 'white',
  },
  error: {
    borderWidth: 2,
    borderColor: 'red',
  },
  passwordLabel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  // input: {
  //   backgroundColor: 'white',
  //   borderColor: 'none',
  //   height: 40,
  //   padding: 10,
  //   borderRadius: 4,
  // },
  input: {
    backgroundColor: 'white',
    borderColor: '#03c75a',
    height: 40,
    padding: 10,
    borderRadius: 4,
    // borderBottomColor: '#03c75a',
    borderWidth: 1,
    // width: '100%',
  },
  errorText: {
    marginTop: 5,
    marginBottom: 5,
    color: 'red',
  },
  agreementText: {
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    minHeight: 150,
    padding: 10,
  },
  agreementTermHeader: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  agreementTitle: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  position: {
    centerBig: {
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    centerNormal: {
      textAlign: 'center',
      marginTop: 10,
    },
  },
  myPage: {
    text: {
      marginTop: 5,
      marginLeft: 10,
      marginRight: 10,
      flexGrow: 1,
      backgroundColor: 'white',
      textAlign: 'center',
      lineHeight: 50,
      minHeight: 50,
    },
    title: {
      marginLeft: 40,
      flexBasis: 40,
      fontSize: 20,
      fontWeight: 'bold',
      borderEndWidth: 1,
      borderEndColor: 'black',
    },
  },
  findUserButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 80,
    justifyContent: 'space-around',
  },
});
