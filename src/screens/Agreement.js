import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {styles} from '../style/styles';
import {useDispatch, useSelector} from 'react-redux';
import Button from './Button';
import * as userAuth from '../state/userAuthSlice';
import {Terms} from './Terms';

const Agreement = ({navigation}) => {
  const dispatch = useDispatch();
  const agreementSelector = useSelector(state => {
    const {agreementList} = state.userAgreement;
    const defaultCheckInputs = {};
    agreementList.forEach(condition => {
      defaultCheckInputs[condition.title] = false;
    });
    return {agreementList, defaultCheckInputs};
  });

  const [checkInputs, setCheckInputs] = useState(
    agreementSelector.defaultCheckInputs,
  );
  const [warningMessage, setWarningMessage] = useState(false);
  const onSubmitHandler = e => {
    e.preventDefault();
    if (!checkInputs.termsOfService || !checkInputs.privatePolicy) {
      setWarningMessage(true);
      return;
    }
    setWarningMessage(false);
    console.log('checkInputs', checkInputs);
    dispatch(userAuth.setAgreement(checkInputs));
    navigation.navigate('Register');
  };
  return (
    <ScrollView style={styles.containerScrollView}>
      <Text style={[styles.text.big, styles.position.centerBig]}>
        Agreement
      </Text>
      {agreementSelector.agreementList.map((item, idx) => {
        return (
          <Terms
            key={idx}
            checkInputs={checkInputs}
            setCheckInputs={setCheckInputs}
            {...item}
          />
        );
      })}
      {warningMessage && (
        <Text style={[styles.errorText, styles.position.centerNormal]}>
          필수항목에 동의해주세요
        </Text>
      )}
      <Button title="Next" onPress={e => onSubmitHandler(e)} />
    </ScrollView>
  );
};
export default Agreement;
