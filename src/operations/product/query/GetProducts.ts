import { gql, LazyQueryHookOptions, useLazyQuery } from '@apollo/client';
import { PRODUCT_FRAGMENT_GQL } from '@/operations/product/fragment';

import { Product } from '@/domain/product';

export type Data = Record<'products', Product[]>;

export interface Variable {
  storeId?: string;
  page?: number;
  take?: number;
  search?: string;
}

export const GET_PRODUCTS_GQL = gql`
  ${PRODUCT_FRAGMENT_GQL}
  query products($storeId: ID, $page: Int, $take: Int, $search: String) {
    products(storeId: $storeId, page: $page, take: $take, search: $search) {
      ...ProductFragment
    }
  }
`;

export const GET_PRODUCTS = (options?: LazyQueryHookOptions<Data, Variable>) =>
  useLazyQuery<Data, Variable>(GET_PRODUCTS_GQL, { ...options });
