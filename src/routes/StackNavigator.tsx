import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home/Home.screen'
import Appointments from '../screens/appointments/Appoitments.screen'
import Rewards from '../screens/rewards/Rewards.screen'
import Profile from '../screens/profile/Profile.screen'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Appointments" component={Appointments} /> */}
      <Stack.Screen name="Rewards" component={Rewards} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}