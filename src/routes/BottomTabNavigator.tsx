import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/Home.screen';
import Appointments from '../screens/appointments/Appointments.screen';
import Rewards from '../screens/rewards/Rewards.screen';
import Profile from '../screens/profile/Profile.screen';
import { GiftIcon } from '../assets/icons/GiftIcon';
import { CalendarIcon } from '../assets/icons/CalendarIcon';
import { HomeIcon } from '../assets/icons/Home';
import { ProfileIcon } from '../assets/icons/Profile';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CalendarIcon color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <GiftIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}