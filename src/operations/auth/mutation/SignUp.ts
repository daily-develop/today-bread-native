import { gql, MutationHookOptions, useMutation } from '@apollo/client';
import { ReactNativeFile } from 'apollo-upload-client';

import { Token } from '@/domain/token';

export type Data = Record<'signUp', Token>;

export interface Variables {
  type: 'KAKAO' | 'NAVER';
  token: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  profileImage: ReactNativeFile;
}

export const SIGN_UP_GQL = gql`
  mutation signUp(
    $type: AuthType!
    $token: String!
    $name: String!
    $email: String!
    $phone: String!
    $address: String!
    $profileImage: Upload
  ) {
    signUp(
      request: {
        type: $type
        token: $token
        name: $name
        email: $email
        phone: $phone
        address: $address
        profileImage: $profileImage
      }
    ) {
      accessToken
      refreshToken
    }
  }
`;

export const SIGN_UP = (options?: MutationHookOptions<Data, Variables>) =>
  useMutation<Data, Variables>(SIGN_UP_GQL, {
    ...options,
  });
