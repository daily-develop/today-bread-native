import { InMemoryCache, Reference } from '@apollo/client';
import _ from 'lodash';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        productsRanking: {
          keyArgs: false,
          merge: (
            existing: Reference[] = [],
            incoming: Reference[],
            { readField }
          ) =>
            _(existing)
              .unionBy(incoming, '__ref')
              .orderBy((product) => readField('score', product), ['desc'])
              .value(),
        },
        ordersWithMember: {
          keyArgs: false,

          merge: (
            existing: Reference[] = [],
            incoming: Reference[],
            { readField }
          ) =>
            _(existing)
              .unionBy(incoming, '__ref')
              .orderBy((order) => readField('createdAt', order), ['desc'])
              .value(),
        },
      },
    },
  },
});

export default cache;
