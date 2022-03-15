import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from '../style/styles';
import Input from './Input';
import Button from './Button';
import {validate} from '../utils/validate';

const FindUser = ({navigation}) => {
  const [findId, setFindId] = useState(true);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    const {id, phone, name} = data;
    const submitData = findId ? {name, phone} : {id, phone};
    console.log(12111212, submitData);
    // navigation.navigate('Edit');
  };

  console.log('errors', errors);

  return (
    <View style={styles.containerVertical}>
      <View style={styles.findUserButtonContainer}>
        <TouchableOpacity onPress={() => setFindId(true)}>
          <Text style={styles.text.big}>Id</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFindId(false)}>
          <Text style={styles.text.big}>Password</Text>
        </TouchableOpacity>
      </View>
      {!findId && (
        <>
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
        </>
      )}
      {findId && (
        <>
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
        </>
      )}
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
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
      <Button onPress={handleSubmit(onSubmit)} title="Submit" />
    </View>
  );
};

export default FindUser;
