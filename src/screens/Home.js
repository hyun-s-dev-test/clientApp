import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../style/styles';
// import Button from './Button';
// import Input from './Input';

const Home = ({navigation}) => {
  return (
    <View style={styles.containerVertical}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.text.big, {alignSelf: 'center'}]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Agreement')}>
        <Text style={[styles.text.big, {alignSelf: 'center'}]}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mypage')}>
        <Text style={[styles.text.big, {alignSelf: 'center'}]}>Mypage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FindUser')}>
        <Text style={[styles.text.big, {alignSelf: 'center'}]}>FindUser</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

/* src/screens/Home.js */
