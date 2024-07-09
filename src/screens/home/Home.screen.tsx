import { View, Text, Image, StyleSheet, ScrollView, FlatList, ActivityIndicator } from 'react-native' 
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { AppointmentCard } from '../../components';
import { colors } from '../../theme/theme';
import RewardsImg from '../../assets/rewards.png'
import useStore from '../../store/store';
import { useEffect } from 'react';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  const {
    isFetching,
    getRewards,
    getServices,
    getAppointments,
    appointments,
  } = useStore(state => state)

  useEffect(() => {
    getRewards()
    getServices()
    getAppointments()
  }, [])

  return ( 
    <SafeAreaView style={{ flex: 1 }}>
      <Header title='Home' />

      <View style={styles.container}>
        {isFetching ? <ActivityIndicator size="large" /> : (
          <FlatList
            ListHeaderComponent={
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Points</Text>

                <View style={styles.pointsCard}>
                  <Image source={RewardsImg} style={{ height: 50, width: 50 }} />

                  <View>
                    <Text style={{ fontSize: 12 }}>Available</Text>
                    <Text style={{ fontSize: 38, fontWeight: '700' }}>120</Text>
                  </View>
                </View>

                <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Next Appointments</Text>
              </View>
            }
            ListEmptyComponent={<View><Text>There are not next appointments</Text></View>}
            data={appointments}
            renderItem={({ item }) => <AppointmentCard appointment={item}/>}
            keyExtractor={({ id }) => id}
          />
        )}
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 6,
  },
  pointsCard: {
    marginTop: 20,
    backgroundColor: colors.backgroundInput,
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  section: {
    flex: 1,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16
  }
})
 
export default HomeScreen;