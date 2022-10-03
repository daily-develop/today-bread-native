import { StackScreenProps } from '@react-navigation/stack';

export enum RootNavigations {
  Auth = 'Auth',
  UnAuth = 'UnAuth',
}

export type RootStackParamList = {
  [RootNavigations.Auth]: undefined;
  [RootNavigations.UnAuth]: undefined;
};

export type RootStackParamProps<T extends RootNavigations> = StackScreenProps<
  RootStackParamList,
  T
>;
