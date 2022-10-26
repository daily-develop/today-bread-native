import { gql, MutationHookOptions, useMutation } from '@apollo/client';
import { ReactNativeFile } from 'apollo-upload-client';

import { STORE_RESPONSE_GQL } from '@/operations/store';
import { Store } from '@/domain/store';

export type Data = Record<'me', Store>;

export interface Variables {
  image: ReactNativeFile;
  name: string;
  description?: string;
  location: string;
  phone: string;
  manager: {
    nickname: string;
  };
}

export const CREATE_STORE_GQL = gql`
  ${STORE_RESPONSE_GQL}
  mutation createStore(
    $image: Upload
    $name: String!
    $description: String
    $location: String!
    $phone: String!
    $manager: CreateManagerRequest!
  ) {
    createStore(
      request: {
        image: $image
        name: $name
        description: $description
        location: $location
        phone: $phone
        manager: $manager
      }
    ) {
      ...StoreResponseField
    }
  }
`;

export const CREATE_STORE = (options?: MutationHookOptions<Data, Variables>) =>
  useMutation<Data, Variables>(CREATE_STORE_GQL, { ...options });
