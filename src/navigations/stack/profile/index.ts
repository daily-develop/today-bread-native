import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';
import {
  MainBottomTabParamProps,
  MainNavigations,
} from '@/navigations/tab/main';

export enum ProfileNavigations {
  Home = 'ProfileHome',
  CreateStore = 'ProfileCreateStore',
  Store = 'ProfileStore',
  SubscribedProduct = 'ProfileSubscribeProduct',
}

export type ProfileStackParamList = {
  [ProfileNavigations.Home]: undefined;
  [ProfileNavigations.CreateStore]: undefined;
  [ProfileNavigations.Store]: { storeId: string };
  [ProfileNavigations.SubscribedProduct]: undefined;
};

export type ProfileStackParamProps<T extends ProfileNavigations> =
  CompositeScreenProps<
    StackScreenProps<ProfileStackParamList, T>,
    MainBottomTabParamProps<MainNavigations.Profile>
  >;
