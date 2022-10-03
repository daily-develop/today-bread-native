import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  AuthNavigations,
  AuthStackParamList,
} from '@/navigations/stack/auth/index';
import { stackNavigationOptions } from '@/constants/navigation.options';

import AuthHomeScreen, {
  AuthHomeScreenOptions,
} from '@/screens/auth/AuthHomeScreen';
import AuthSignUpScreen, {
  AuthSignUpScreenOptions,
} from '@/screens/auth/AuthSignUpScreen';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen
        name={AuthNavigations.AuthHome}
        component={AuthHomeScreen}
        options={AuthHomeScreenOptions}
      />
      <Stack.Screen
        name={AuthNavigations.AuthSignUp}
        component={AuthSignUpScreen}
        options={AuthSignUpScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
