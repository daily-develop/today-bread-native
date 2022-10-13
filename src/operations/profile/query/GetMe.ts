import { gql, QueryOptions, useQuery } from '@apollo/client';

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
      address
      profileImageUrl
    }
  }
`;

export const GET_ME = (options?: QueryOptions<Data, Variables>) =>
  useQuery<Data, Variables>(GET_ME_GQL, {
    ...options,
  });
