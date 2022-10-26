import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {
  StoreDetailNavigations,
  StoreDetailStackParamList,
  StoreDetailStackParamProps,
} from '@/navigations/stack/store/index';
import { stackNavigationOptions } from '@/constants/navigation.options';

import StoreDetailHomeScreen, {
  StoreDetailHomeScreenOptions,
} from '@/screens/store/detail/StoreDetailHomeScreen';

type routeProp =
  StoreDetailStackParamProps<StoreDetailNavigations.Home>['route'];

export const StoreDetailStackNavigatorOptions: StackNavigationOptions = {
  headerShown: false,
};

const Stack = createStackNavigator<StoreDetailStackParamList>();

const StoreDetailStackNavigator: React.FC = () => {
  const route = useRoute<routeProp>();

  return (
    <Stack.Navigator
      initialRouteName={StoreDetailNavigations.Home}
      screenOptions={stackNavigationOptions}
    >
      <Stack.Screen
        name={StoreDetailNavigations.Home}
        component={StoreDetailHomeScreen}
        options={StoreDetailHomeScreenOptions}
        initialParams={{ storeId: route.params?.storeId ?? undefined }}
      />
    </Stack.Navigator>
  );
};

export default StoreDetailStackNavigator;
