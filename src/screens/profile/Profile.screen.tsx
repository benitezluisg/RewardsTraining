import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Profile = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text>Profile</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
        <Text>Go to Rewards</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile
