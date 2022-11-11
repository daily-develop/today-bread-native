import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';

import {
  MainBottomTabParamProps,
  MainNavigations,
} from '@/navigations/tab/main';
import { BreadType } from '@/domain/product';

export enum HomeNavigations {
  Home = 'Home',
  Category = 'HomeCategory',
  Product = 'HomeProduct',
  Store = 'HomeStore',
  RecentStore = 'HomeRecentStore',
}

export type HomeStackParamList = {
  [HomeNavigations.Home]: undefined;
  [HomeNavigations.Category]: { breadType: BreadType };
  [HomeNavigations.Product]: undefined;
  [HomeNavigations.Store]: undefined;
  [HomeNavigations.RecentStore]: undefined;
};

export type HomeStackParamProps<T extends HomeNavigations> =
  CompositeScreenProps<
    StackScreenProps<HomeStackParamList, T>,
    MainBottomTabParamProps<MainNavigations.Home>
  >;
