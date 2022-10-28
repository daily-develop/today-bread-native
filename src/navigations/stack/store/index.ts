import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';
import {
  MainBottomTabParamProps,
  MainNavigations,
} from '@/navigations/tab/main';

export enum StoreNavigations {
  Home = 'StoreHome',
  Detail = 'StoreDetail',
}

export type StoreStackParamList = {
  [StoreNavigations.Home]: undefined;
  [StoreNavigations.Detail]: { storeId: string };
};

export type StoreStackParamProps<T extends StoreNavigations> =
  CompositeScreenProps<
    StackScreenProps<StoreStackParamList, T>,
    MainBottomTabParamProps<MainNavigations.Store>
  >;

/* Store Detail */
export enum StoreDetailNavigations {
  Home = 'StoreDetailHome',
}

export type StoreDetailStackParamList = {
  [StoreDetailNavigations.Home]: { storeId: string };
};

export type StoreDetailStackParamProps<T extends StoreDetailNavigations> =
  CompositeScreenProps<
    StackScreenProps<StoreDetailStackParamList, T>,
    { navigation: any }
  >;
