import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from '../style/styles';
import Input from './Input';
import Button from './Button';
import {validate} from '../utils/validate';

const Login = ({navigation}) => {
  const [pwToggle, setPwtoggle] = useState(true);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Mypage');
  };

  console.log('errors', errors);

  return (
    <View style={styles.containerVertical}>
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

      <Button onPress={handleSubmit(onSubmit)} title="Login" />
      <Button
        onPress={() => navigation.reset({routes: [{name: 'Home'}]})}
        title="Home"
      />
    </View>
  );
};

export default Login;
