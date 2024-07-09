import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { colors } from '../../theme/theme'

interface HeaderProps {
  title: string
  left?: React.ReactNode,
  right?: React.ReactNode,
  style?: StyleProp<ViewStyle>
}

const Header = ({ title, left, right, style }: HeaderProps) => {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.leftContainer}>
        {left}
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        {right}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: '100%',
  },
  headerTitle: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: '700',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default Header
