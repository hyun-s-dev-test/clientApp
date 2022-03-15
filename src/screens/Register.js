import React, {useState, useRef} from 'react';
import {Text, View, ScrollView, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from '../style/styles';
import Input from './Input';
import Button from './Button';
import {validate} from '../utils/validate';
import {useDispatch, useSelector} from 'react-redux';
import * as userAuth from '../state/userAuthSlice';
import * as userInfo from '../state/userInfoSlice';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const userAuthSelector = useSelector(state => {
    const userInfo = state.userAuth;
    // const birth = `${userInfo.year}-${userInfo.month}-${userInfo.day}`;
    // const userRegisterInfo = {birth, ...userInfo};
    return {userInfo};
  });
  const [pwToggle, setPwtoggle] = useState(true);
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm();

  const monthRef = useRef({});
  const yearRef = useRef({});
  monthRef.current = watch('month', '');
  yearRef.current = watch('year', '');
  const onSubmit = async data => {
    const birth = `${data.year}-${
      data.month.length === 1 ? `0${data.month}` : data.month
    }-${data.day.length === 1 ? `0${data.day}` : data.day}`;
    const userData = {birth, ...userAuthSelector.userInfo, ...data};
    console.log('userData', userData);
    dispatch(userAuth.setUserInfo(userData));
    dispatch(userInfo.setUserInfo(userData));
    Alert.alert('회원가입 성공', '반가워요', [
      {
        text: 'Home',
        onPress: () => navigation.reset({routes: [{name: 'Home'}]}),
        style: 'cancel',
      },
      {
        text: 'Login',
        onPress: () => navigation.reset({routes: [{name: 'Login'}]}),
      },
    ]);
    // try {
    //   const response = await dispatch(
    //     userInfo.postUser({url: 'api/user', data}),
    //   ).unwrap();
    //   console.log(response);
    //   alert('회원가입이 완료되었습니다.');
    //   navigate('/');
    // } catch (err) {
    //   console.error(err);
    //   alert('중복된 id입니다.');
    //   return;

    //   // handle error here
    // }
  };

  console.log('errors', errors);

  return (
    <ScrollView style={styles.containerScrollView}>
      <Text style={[styles.text.big, styles.position.centerBig]}>Register</Text>
      <Text style={styles.label}>Id</Text>
      <Controller
        defaultValue=""
        name="id"
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            error={errors?.id}
            errorText={errors?.id?.message}
            placeholder="id"
            style={styles.input}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        rules={{
          required: {value: true, message: 'id is required'},
          pattern: {
            value: validate.id.regex,
            message: validate.id.message,
          },
        }}
      />
      <View styles={styles.passwordLabel}>
        <Text style={styles.label}>Password</Text>
        <Text onPress={() => setPwtoggle(prev => !prev)}>보기</Text>
      </View>
      <Controller
        defaultValue=""
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            error={errors?.password}
            errorText={errors?.password?.message}
            placeholder="password"
            style={styles.input}
            onChangeText={value => onChange(value)}
            value={value}
            secure={pwToggle}
          />
        )}
        name="password"
        rules={{
          required: {value: true, message: 'password is required'},
          pattern: {
            value: validate.password.regex,
            message: validate.password.message,
          },
        }}
      />
      <Text style={styles.label}>Name</Text>
      <Controller
        defaultValue=""
        name="name"
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            error={errors?.name}
            errorText={errors?.name?.message}
            placeholder="name"
            style={styles.input}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        rules={{
          required: {value: true, message: 'name is required'},
          pattern: {
            value: validate.name.regex,
            message: validate.name.message,
          },
        }}
      />
      <Text style={styles.label}>Gender</Text>
      <Controller
        defaultValue=""
        name="gender"
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            error={errors?.gender}
            errorText={errors?.gender?.message}
            placeholder="gender"
            style={styles.input}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        rules={{
          required: {value: true, message: 'gender is required'},
          validate: value =>
            validate.gender.genderList.includes(value) ||
            validate.gender.message,
        }}
      />
      <Text style={styles.label}>Phone</Text>
      <Controller
        defaultValue=""
        name="phone"
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            error={errors?.phone}
            errorText={errors?.phone?.message}
            placeholder="phone"
            style={styles.input}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        rules={{
          required: {value: true, message: 'phone number is required'},
          pattern: {
            value: validate.phone.regex,
            message: validate.phone.message,
          },
        }}
      />
      <Text style={styles.label}>Birth Year</Text>
      <Controller
        defaultValue=""
        name="year"
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            error={errors?.year}
            errorText={errors?.year?.message}
            placeholder="year"
            style={styles.input}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        rules={{
          required: {value: true, message: 'birth year is required'},
          validate: value =>
            validate.year(value).isValid || validate.year(value).message,
        }}
      />
      <Text style={styles.label}>Birth Month</Text>
      <Controller
        defaultValue=""
        name="month"
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            error={errors?.month}
            errorText={errors?.month?.message}
            placeholder="month"
            style={styles.input}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        rules={{
          required: {value: true, message: 'birth month is required'},
          validate: value =>
            validate.month(value).isValid || validate.month(value).message,
        }}
      />
      <Text style={styles.label}>Birth Day</Text>
      <Controller
        defaultValue=""
        name="day"
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            error={errors?.day}
            errorText={errors?.day?.message}
            placeholder="day"
            style={styles.input}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        rules={{
          required: {value: true, message: 'birth day is required'},
          validate: value =>
            validate.day(yearRef.current, monthRef.current, value).isValid ||
            validate.day(yearRef.current, monthRef.current, value).message,
        }}
      />

      <Button onPress={handleSubmit(onSubmit)} title="Submit" />
      <Button
        onPress={() => {
          reset({});
        }}
        title="Reset"
      />
    </ScrollView>
  );
};

export default Register;
