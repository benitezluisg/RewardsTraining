import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, RewardCard } from '../../components';
import { rewards } from '../../api';
import AddReward from './AddReward.comp';

const Rewards = () => {
  return ( 
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title='Rewards'
        right={<AddReward />}
      />

      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rewards</Text>

          <FlatList
            data={rewards}
            renderItem={({ item }) => <RewardCard reward={item} />}
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
 
 
export default Rewards;