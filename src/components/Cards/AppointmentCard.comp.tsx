import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../theme/theme'
import { Appointment } from '../../types'

export interface AppointmentProps {
  appointment: Appointment
}

const AppointmentCard = ({ appointment }: AppointmentProps) => {
  return  (
    <View style={styles.card}>
      <View style={styles.schedule}>
        <Text style={styles.smallText}>{appointment.date}</Text>
        <Text style={styles.hourText}>{appointment.hour}</Text>
      </View>
      <View style={styles.serviceInfo}>
        <Text style={styles.statusText}>{appointment.status}</Text>
        <Text style={styles.userText}>{appointment.user.name}</Text>
        <Text style={styles.smallText}>{appointment.services.join(', ')}</Text>
      </View>
      <View style={styles.points}>
        <Text>Points</Text>
        <Text style={styles.pointsText}>{appointment.points}</Text>
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
  schedule: {
    justifyContent: 'center',
    width: 70
  },
  smallText: {
    fontSize: 12
  },
  hourText: {
    fontSize: 22,
    fontWeight: '800',
    marginTop: 8,
  },
  serviceInfo: {
    flex: 1,
    gap: 4
  },
  statusText: {
    fontSize: 12,
    textTransform: 'capitalize'
  },
  userText: {
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

export default AppointmentCard