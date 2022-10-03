import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';

import client from '@/client';

import Main from '@/Main';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar />
          <Main />
        </SafeAreaProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
