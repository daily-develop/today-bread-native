import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';
import {
  MainBottomTabParamProps,
  MainNavigations,
} from '@/navigations/tab/main';

export enum SearchNavigations {
  Home = 'SearchHome',
}

export type SearchStackParamList = {
  [SearchNavigations.Home]: undefined;
};

export type SearchStackParamProps<T extends SearchNavigations> =
  CompositeScreenProps<
    StackScreenProps<SearchStackParamList, T>,
    MainBottomTabParamProps<MainNavigations.Search>
  >;
