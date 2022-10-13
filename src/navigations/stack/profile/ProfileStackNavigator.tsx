import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { UserCircleIcon } from 'react-native-heroicons/mini';

import {
  ProfileNavigations,
  ProfileStackParamList,
} from '@/navigations/stack/profile/index';
import { stackNavigationOptions } from '@/constants/navigation.options';

import ProfileHomeScreen, {
  ProfileHomeScreenOptions,
} from '@/screens/profile/ProfileHomeScreen';

export const ProfileStackNavigatorOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ size, color }) => {
    return <UserCircleIcon size={size} color={color} />;
  },
};

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen
        name={ProfileNavigations.Home}
        component={ProfileHomeScreen}
        options={ProfileHomeScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
