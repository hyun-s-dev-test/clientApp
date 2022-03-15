/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {store} from './store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import React from 'react';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
