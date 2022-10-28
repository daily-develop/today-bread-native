import { gql, MutationHookOptions, useMutation } from '@apollo/client';
import { ReactNativeFile } from 'apollo-upload-client';

import { BreadType, Product } from '@/domain/product';
import { PRODUCT_FRAGMENT_GQL } from '@/operations/product/fragment';

export type Data = Record<'createProduct', Product>;
export interface Variable {
  storeId: string;
  image?: ReactNativeFile;
  name: string;
  breadType: BreadType;
  description?: string;
  price: number;
  quantity: number | null;
}

export const CREATE_PRODUCT_GQL = gql`
  ${PRODUCT_FRAGMENT_GQL}
  mutation createProduct(
    $storeId: ID!
    $image: Upload
    $name: String!
    $breadType: BreadType!
    $description: String
    $price: Int!
    $quantity: Int
  ) {
    createProduct(
      request: {
        storeId: $storeId
        image: $image
        name: $name
        breadType: $breadType
        description: $description
        price: $price
        quantity: $quantity
      }
    ) {
      ...ProductFragment
    }
  }
`;

export const CREATE_PRODUCT = (options?: MutationHookOptions<Data, Variable>) =>
  useMutation<Data, Variable>(CREATE_PRODUCT_GQL, { ...options });
