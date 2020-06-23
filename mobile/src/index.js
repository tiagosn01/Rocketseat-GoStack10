import 'react-native-gesture-handler';

import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { store, persistor } from './store';
import App from './App';

export default function Index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#23232F" />
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
