import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import './app.css';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql'
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>My Lego Sets</h1>
    </ApolloProvider>
  );
};

export default App;
