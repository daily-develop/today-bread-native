import { Store } from '@/domain/store';
import { gql, LazyQueryHookOptions, useLazyQuery } from '@apollo/client';

import { STORE_RESPONSE_GQL } from '@/operations/store';

export type Data = Record<'store', Store>;

export interface Variable {
  storeId: string;
}

export const GET_STORE_GQL = gql`
  ${STORE_RESPONSE_GQL}
  query store($storeId: String!) {
    store(storeId: $storeId) {
      ...StoreResponseField
    }
  }
`;

export const GET_STORE = (options?: LazyQueryHookOptions<Data, Variable>) =>
  useLazyQuery<Data, Variable>(GET_STORE_GQL, options);
