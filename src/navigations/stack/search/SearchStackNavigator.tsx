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
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
