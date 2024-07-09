import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import { colors } from '../../theme/theme'

interface InputProps extends React.ComponentProps<typeof TextInput> {
  label?: string
  error?: string | boolean | null
  value: string
  useRef?: React.RefObject<TextInput>
  disabled?: boolean
  selectionColor?: string
  placeholderTextColor?: string
  onChangeText: (value: string) => void
}

const FormField = ({ 
  label = '',
  error = null,
  useRef,
  disabled = false,
  selectionColor = '#000',
  placeholderTextColor = '#808080',
  onChangeText,
  ...props
}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      {!!label ? <Text style={styles.label}>{label}</Text> : null}

      <TextInput
        {...props}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        ref={useRef}
        autoComplete="off"
        onChangeText={onChangeText}
        style={[styles.input, disabled ? { opacity: 0.5 } : null]}
      />

      {!!error ? (
        <Text style={[styles.label, styles.error, styles.errorMessage]}>
          {error}
        </Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    gap: 4,
    marginVertical: 12,
  },
  input: {
    fontSize: 16,
    padding: 16,
    color: colors.dark,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.backgroundInput,
    width: '100%'
  },
  error: {
    borderWidth: 1.5,
  },
  label: {
    fontWeight: '400',
    color: colors.dark
  },
  errorMessage: {
    padding: 0
  }
})

export default React.memo(FormField)
