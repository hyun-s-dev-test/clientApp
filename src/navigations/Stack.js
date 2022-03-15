import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Agreement from '../screens/Agreement';
import Mypage from '../screens/Mypage';
import Edit from '../screens/Edit';
import FindUser from '../screens/FindUser';
// import FindUserId from '../screens/FindUserId';
// import FindUserPassword from '../screens/FindUserPassword';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Agreement" component={Agreement} />
      <Stack.Screen name="Mypage" component={Mypage} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="FindUser" component={FindUser} />
      {/* <Stack.Screen name="FindUserId" component={FindUserId} />
      <Stack.Screen name="FindUserPassword" component={FindUserPassword} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;

/* src/navigations/Stack.js */
