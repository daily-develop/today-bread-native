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

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
	return <Stack.Navigator screenOptions={screenOptions}>
		<Stack.Screen name={RootNavigations.Auth} component={AuthStackNavigator}/>
	</Stack.Navigator>
}

const screenOptions: StackNavigationOptions = {
	headerShown: false
}

export default RootStackNavigator