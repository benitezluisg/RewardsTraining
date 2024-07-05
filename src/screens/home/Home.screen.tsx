import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
