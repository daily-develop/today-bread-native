import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';

import { RootNavigations, RootStackParamProps } from '@/navigations/stack/root';

export enum AuthNavigations {
  AuthHome = 'AuthHome',
  AuthSignUp = 'AuthSignUp',
}

export type AuthStackParamList = {
  [AuthNavigations.AuthHome]: undefined;
  [AuthNavigations.AuthSignUp]: undefined;
};

export type AuthStackParamProps<T extends AuthNavigations> =
  CompositeScreenProps<
    StackScreenProps<AuthStackParamList, T>,
    RootStackParamProps<RootNavigations.UnAuth>
  >;
