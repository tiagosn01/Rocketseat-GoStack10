import 'react-native-gesture-handler';
import React from 'react';

import './config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#23232F" />
      <Routes />
    </NavigationContainer>
  );
}
