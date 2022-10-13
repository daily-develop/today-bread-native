import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';
import {
  MainBottomTabParamProps,
  MainNavigations,
} from '@/navigations/tab/main';

export enum HomeNavigations {
  Home = 'Home',
}

export type HomeStackParamList = {
  [HomeNavigations.Home]: undefined;
};

export type HomeStackParamProps<T extends HomeNavigations> =
  CompositeScreenProps<
    StackScreenProps<HomeStackParamList, T>,
    MainBottomTabParamProps<MainNavigations.Home>
  >;
