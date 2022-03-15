// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   Alert,
// } from 'react-native';
// import {useForm, Controller} from 'react-hook-form';
// import {styles} from '../style/styles';
// import Input from './Input';
// import Button from './Button';
// import {validate} from '../utils/validate';

// const FindUser = ({navigation}) => {
//   const [pwToggle, setPwtoggle] = useState(true);
//   const [findId, setFindId] = useState(true);
//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: {errors},
//   } = useForm();
//   const onSubmit = data => {
//     console.log(data);
//     // navigation.navigate('Edit');
//   };

//   console.log('errors', errors);

//   return (
//     <View style={styles.containerVertical}>
//       <View
//         style={{
//           flex: 1,
//           flexDirection: 'row',
//           maxHeight: 80,
//           justifyContent: 'space-around',
//         }}>
//         <TouchableOpacity onPress={() => navigation.replace('FindUserId')}>
//           <Text style={styles.text.big}>Id</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => navigation.replace('FindUserPassword')}>
//           <Text style={styles.text.big}>Password</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.label}>Name</Text>
//       <Controller
//         defaultValue=""
//         name="name"
//         control={control}
//         render={({field: {onChange, value}}) => (
//           <Input
//             error={errors?.name}
//             errorText={errors?.name?.message}
//             placeholder="name"
//             style={styles.input}
//             onChangeText={value => onChange(value)}
//             value={value}
//           />
//         )}
//         rules={{
//           required: {value: true, message: 'name is required'},
//           pattern: {
//             value: validate.name.regex,
//             message: validate.name.message,
//           },
//         }}
//       />

//       <Text style={styles.label}>Phone</Text>
//       <Controller
//         defaultValue=""
//         name="phone"
//         control={control}
//         render={({field: {onChange, value}}) => (
//           <Input
//             error={errors?.phone}
//             errorText={errors?.phone?.message}
//             placeholder="phone"
//             style={styles.input}
//             onChangeText={value => onChange(value)}
//             value={value}
//           />
//         )}
//         rules={{
//           required: {value: true, message: 'phone number is required'},
//           pattern: {
//             value: validate.phone.regex,
//             message: validate.phone.message,
//           },
//         }}
//       />
//       <Button onPress={() => navigation.navigate('Home')} title="Home" />
//       <Button onPress={handleSubmit(onSubmit)} title="Submit" />
//     </View>
//   );
// };

// export default FindUser;
