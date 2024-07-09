import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../../theme/theme'

interface PrimaryButtonProps {
  text: string
  disabled: boolean
  onPress: () => void
}

const PrimaryButton = ({
  text,
  disabled,
  onPress,
}: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  }
})

export default PrimaryButton