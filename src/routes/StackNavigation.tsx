import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/Home.screen';
import Appointments from '../screens/appointments/Appointments.screen';
import Rewards from '../screens/rewards/Rewards.screen';
import Profile from '../screens/profile/Profile.screen';

export type RootStackParams = {
  Home: undefined
  Appointments: undefined
  Rewards: undefined
  Profile: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Appointments" component={Appointments} />
      <Stack.Screen name="Rewards" component={Rewards} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}
