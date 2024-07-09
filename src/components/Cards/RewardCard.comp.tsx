import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../theme/theme'
import { Reward } from '../../types'

export interface RewardCardProps {
  reward: Reward
}

const RewardCard = ({ reward }: RewardCardProps) => {
  return  (
    <View style={styles.card}>
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceText}>{reward.service}</Text>
      </View>
      <View style={styles.points}>
        <Text>Points</Text>
        <Text style={styles.pointsText}>{reward.points}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.backgroundInput,
    justifyContent: 'space-between',
    padding: 12,
    flexDirection: 'row',
    marginTop: 16,
    borderRadius: 8,
    gap: 16,
  },
  serviceInfo: {
    flex: 1,
    gap: 4,
    justifyContent: 'center',
  },
  serviceText: {
    fontSize: 18,
    fontWeight: '600'
  },
  points: {
    width: 50,
    alignSelf: 'center',
    alignItems: 'center',
    gap: 6
  },
  pointsText: {
    fontSize: 20,
    fontWeight: '600'
  }
})

export default RewardCard