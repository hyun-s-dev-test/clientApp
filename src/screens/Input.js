import {styles} from '../style/styles';
import * as React from 'react';
import {Text, TextInput} from 'react-native';

const Input = props => {
  return (
    <>
      <TextInput
        style={[styles.input, props.error && styles.error, props.style]}
        autoCapitalize="none"
        secureTextEntry={props.secure || false}
        {...props}
      />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </>
  );
};

export default Input;
