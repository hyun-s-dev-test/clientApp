import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../style/styles';

export const UserInfo = ({title, text, ...rest}) => {
  return (
    <>
      <View style={styles.containerHorizontal}>
        <Text style={styles.myPage.title}>{title}</Text>
        <TouchableOpacity {...rest} style={styles.myPage.text}>
          <Text style={styles.myPage.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
