import { gql } from '@apollo/client';

export const STORE_RESPONSE_GQL = gql`
  fragment StoreResponseField on StoreResponse {
    id
    createdAt
    updatedAt
    name
    description
    location
    phone
    manager {
      id
      createdAt
      updatedAt
      nickname
    }
    image {
      id
      url
    }
  }
`;
