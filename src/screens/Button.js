import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../style/styles';

const Button = ({title, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      {...props}
      style={[styles.button, props.style]}>
      <Text style={styles.buttonLabel}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
