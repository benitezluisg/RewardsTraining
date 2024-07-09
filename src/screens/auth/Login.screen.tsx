import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Input, PrimaryButton } from '../../components'
import useStore from '../../store/store'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const {
    login
  } = useStore(state => state)

  const handleLogin = async () => {
    if (user !== '' && password !== '') {
      const response = await login(user, password)

      console.log({ response })
    }
    else {
      Alert.alert('Error', 'Please fill all the fields')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <Input
          label="User"
          value={user}
          onChangeText={(value) => setUser(value)}
        />
        <Input
          label="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry
        />

        <PrimaryButton
          text="Login"
          onPress={handleLogin}
          disabled={false}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  }
})

export default Login
