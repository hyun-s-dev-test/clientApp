import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {styles} from '../style/styles';

export const Terms = ({title, required, text, checkInputs, setCheckInputs}) => {
  const onChangeHandler = title => {
    console.log('checkInputs.title', checkInputs[title]);
    checkInputs[title]
      ? setCheckInputs(prev => ({...prev, [title]: false}))
      : setCheckInputs(prev => ({...prev, [title]: true}));
  };
  return (
    <View>
      <View style={styles.agreementTermHeader}>
        <View style={styles.checkbox}>
          <CheckBox
            value={checkInputs[title]}
            onValueChange={() => onChangeHandler(title)}
            boxType="square"
          />
        </View>
        <Text
          style={styles.agreementTitle}
          onPress={() => onChangeHandler(title)}>
          <Text>
            {title} {required ? '(필수사항)' : '(선택사항)'}
          </Text>
        </Text>
      </View>
      <View style={styles.agreementText}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};
