import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Header } from '../../components';
import { AppointmentCard } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme/theme';
import { appointments } from '../../api';
import { PlusIcon } from '../../assets/icons/PlusIcon';
import AddAppoinment from './AddAppoinment.comp';

const Appointments = () => {
  return ( 
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title='Appoinments'
        right={<AddAppoinment />}
      />

      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appointments</Text>

          <FlatList
            data={appointments}
            renderItem={({ item }) => <AppointmentCard appointment={item}/>}
            keyExtractor={item => item.id as any}
          />
        </View>
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
  section: {
    flex: 1,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16
  }
})
 
 
export default Appointments;