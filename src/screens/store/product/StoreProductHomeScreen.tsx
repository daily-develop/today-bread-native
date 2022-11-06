import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import {
  StoreDetailNavigations,
  StoreDetailStackParamProps,
} from '@/navigations/stack/store';

export const StoreProductHomeScreenOptions: StackNavigationOptions = {
  title: '',
};

interface StoreProductHomeScreenProps {
  route: StoreDetailStackParamProps<StoreDetailNavigations.Product>['route'];
}

const StoreProductHomeScreen: React.FC<StoreProductHomeScreenProps> = ({
  route,
}) => {
  return <></>;
};

const styles = StyleSheet.create({});

export default StoreProductHomeScreen;
