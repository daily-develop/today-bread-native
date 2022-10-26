import { Store } from '@/domain/store';
import { gql, LazyQueryHookOptions, useLazyQuery } from '@apollo/client';

import { STORE_RESPONSE_GQL } from '@/operations/store';

export type Data = Record<'managedStore', Store[]>;

export interface Variable {}

export const GET_MANAGED_STORE_GQL = gql`
  ${STORE_RESPONSE_GQL}
  query managedStore {
    managedStore {
      ...StoreResponseField
    }
  }
`;

export const GET_MANAGED_STORE = (
  options?: LazyQueryHookOptions<Data, Variable>
) => useLazyQuery<Data, Variable>(GET_MANAGED_STORE_GQL, options);
