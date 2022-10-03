import { ApolloClient, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import cache from '@/client/cache';

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
});

const authLink = setContext(async (_, { headers }) => ({
  headers: { ...headers, Authorization: `Bearer ` },
}));

const client = new ApolloClient({
  link: from([authLink]),
  cache,
});

export default client;
