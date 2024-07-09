import { StyleSheet } from "react-native";

export const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#22223b',
  background: '#ffffff',
  backgroundInput: '#DDE2EC',
  textPrimary: '#22223b',
  textSecondary: '#6c757d',
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.background,
    fontSize: 18,
  }
})