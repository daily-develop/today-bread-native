import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MagnifyingGlassIcon } from 'react-native-heroicons/mini';

import {
  SearchNavigations,
  SearchStackParamList,
} from '@/navigations/stack/search/index';
import { stackNavigationOptions } from '@/constants/navigation.options';

import SearchHomeScreen, {
  SearchHomeScreenOptions,
} from '@/screens/search/SearchHomeScreen';
import StoreStackNavigator from '@/navigations/stack/store/StoreStackNavigator';

export const SearchStackNavigatorOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ size, color }) => {
    return <MagnifyingGlassIcon size={size} color={color} />;
  },
};

const Stack = createStackNavigator<SearchStackParamList>();

const SearchStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen
        name={SearchNavigations.Home}
        component={SearchHomeScreen}
        options={SearchHomeScreenOptions}
      />
      <Stack.Screen
        name={SearchNavigations.Store}
        component={StoreStackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
