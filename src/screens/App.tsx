import 'react-native-gesture-handler';
import React from 'react'
import Home from './home/Home.screen'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from '../routes/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
