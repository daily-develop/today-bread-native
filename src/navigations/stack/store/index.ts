import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';
import {
  MainBottomTabParamProps,
  MainNavigations,
} from '@/navigations/tab/main';

export enum StoreNavigations {
  Home = 'StoreHome',
}

export type StoreStackParamList = {
  [StoreNavigations.Home]: undefined;
};

export type StoreStackParamProps<T extends StoreNavigations> =
  CompositeScreenProps<
    StackScreenProps<StoreStackParamList, T>,
    MainBottomTabParamProps<MainNavigations.Store>
  >;
