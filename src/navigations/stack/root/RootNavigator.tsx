import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {
  RootNavigations,
  RootStackParamList,
} from '@/navigations/stack/root/index';

import AuthStackNavigator from '@/navigations/stack/auth/AuthStackNavigator';
import HomeScreen from '@/screens/home/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={RootNavigations.Auth}
        component={AuthStackNavigator}
      />
      <Stack.Screen name={RootNavigations.Main} component={HomeScreen} />
    </Stack.Navigator>
  );
};

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export default RootStackNavigator;
