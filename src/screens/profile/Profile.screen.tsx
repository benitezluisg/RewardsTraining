import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native' 
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { colors } from '../../theme/theme';
import RewardsImg from '../../assets/rewards.png'

const Profile = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return ( 
    <SafeAreaView style={{ flex: 1 }}>
      <Header title='Profile' />

      <View style={styles.profileInfo}>
        <Image source={{ uri: 'https://www.fakepersongenerator.com/Face/male/male1085437133332.jpg' }} style={styles.avatarImg} />
        <Text style={styles.nameText}>
          Isidro Mendoza
        </Text>
      </View>
      <View style={{ flex: 2, paddingHorizontal: 20 }}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Points</Text>

          <View style={styles.pointsCard}>
            <Image source={RewardsImg} style={{ height: 50, width: 50 }} />

            <View>
              <Text style={{ fontSize: 12 }}>Available</Text>
              <Text style={{ fontSize: 38, fontWeight: '700' }}>120</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
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
  profileInfo: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  avatarImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  nameText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
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
  },
  logoutContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    padding: 20
  },
  logoutButtonText: {
    fontSize: 18,
    color: colors.danger,
    fontWeight: '600',
  },
})
 
export default Profile;