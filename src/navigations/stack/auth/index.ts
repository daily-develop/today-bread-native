import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';

import { RootNavigations, RootStackParamProps } from '@/navigations/stack/root';

export enum AuthNavigations {
  AuthHome = 'AuthHome',
  AuthSignUp = 'AuthSignUp',
  KakaoLogin = 'KakaoLogin',
}

export type AuthStackParamList = {
  [AuthNavigations.AuthHome]: undefined;
  [AuthNavigations.AuthSignUp]: { type: 'KAKAO' | 'NAVER'; token: string };
  [AuthNavigations.KakaoLogin]: undefined;
};

export type AuthStackParamProps<T extends AuthNavigations> =
  CompositeScreenProps<
    StackScreenProps<AuthStackParamList, T>,
    RootStackParamProps<RootNavigations.Auth>
  >;
