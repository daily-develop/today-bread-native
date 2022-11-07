import { gql, LazyQueryHookOptions, useLazyQuery } from '@apollo/client';

import { Profile } from '@/domain/profile';

export type Data = Record<'me', Profile>;

export interface Variables {}

export const GET_ME_GQL = gql`
  query me {
    me {
      id
      createdAt
      updatedAt
      name
      phone
      email
      postcode
      address1
      address2
      profileImageUrl
    }
  }
`;

export const GET_ME = (options?: LazyQueryHookOptions<Data, Variables>) =>
  useLazyQuery<Data, Variables>(GET_ME_GQL, {
    ...options,
  });
